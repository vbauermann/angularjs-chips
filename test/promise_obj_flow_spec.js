'use strict';

describe('Directive chips : Using promise with list of Object', function() {

    beforeEach(module('angularjs.chips'));

    var element, scope, compile, template, isolateScope, timeout;

    beforeEach(inject(function($rootScope, $injector) {
        scope = $rootScope.$new();
        timeout = $injector.get('$timeout');
        scope.usingPromiseObj = {};
        scope.usingPromiseObj.samples = [{ name: 'India', fl: 'I' }, { name: 'China', fl: 'C' }, { name: 'America', fl: 'A' }];

        scope.usingPromiseObj.render = function(val) {
            var promise = timeout(handleRender, 100);

            function handleRender() {
                if (val === 'India') {
                    timeout.cancel(promise);
                } else {
                    return { name: val, fl: val.charAt(0) };
                }
            }
            return promise;
        };

        scope.usingPromiseObj.deleteChip = function(obj) {
            return true;
        };

        compile = $injector.get('$compile');

        template = '<chips defer ng-model="usingPromiseObj.samples" render="usingPromiseObj.render(data)">' +
            '<chip-tmpl>' +
            '<div class="default-chip">' +
            '{{chip.isLoading ? chip.defer : chip.defer.name}}' +
            '<span ng-hide="chip.isLoading">({{chip.defer.fl}})</span>' +
            '<span class="glyphicon glyphicon-remove" remove-chip="usingPromiseObj.deleteChip(data)"></span>' +
            '<div class="loader-container" ng-show="chip.isLoading">' +
            '<i class="fa fa-spinner fa-spin fa-lg loader"></i>' +
            '</div>' +
            '</div>' +
            '</chip-tmpl>' +
            '<input chip-control></input>' +
            '</chips>';

        element = angular.element(template);
        compile(element)(scope);
        scope.$digest();
        isolateScope = element.isolateScope();
    }));

    it('check chips.list values', function() {
        expect(scope.usingPromiseObj.samples.length).toEqual(isolateScope.chips.list.length);
    });

    it('check adding chip by passing string', function() {
        isolateScope.chips.addChip('Swedan');
        timeout.flush()
        expect(scope.usingPromiseObj.samples[scope.usingPromiseObj.samples.length - 1].name).toBe('Swedan');
    });

    it('check deleting chip by passing string', function() {
        getChipScope(element).$broadcast('chip:delete')
        expect(scope.usingPromiseObj.samples[0].name).not.toBe('India');
    });

    it('check deleting chip while loading', function() {
        isolateScope.chips.addChip('Canada');
        var chipTmpls = element.find('chip-tmpl');
        getChipScope(element,-1).$broadcast('chip:delete')
            // should not delete while loading
        expect(chipTmpls.length).toEqual(element.find('chip-tmpl').length);
    });

    it('check deleting rejected chip', function() {
        isolateScope.chips.addChip('India');
        //rejected chip won't get added to scope
        expect(scope.usingPromiseObj.samples.length).toBe(3)
        timeout.flush();
        var duplicateChipScope = getChipScope(element,-1);
        expect(duplicateChipScope.chip.isFailed).toBe(true);
        var chipTmpls = element.find('chip-tmpl');
        duplicateChipScope.$broadcast('chip:delete');
        // rejected chip should get deleted from view
        expect(chipTmpls.length - 1).toEqual(element.find('chip-tmpl').length);
    });

});
