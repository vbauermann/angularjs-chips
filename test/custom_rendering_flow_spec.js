'use strict';

describe('Directive chips : Custom Rendering', function() {

    beforeEach(module('angularjs.chips'));

    var element, scope, compile, template, isolateScope, timeout;

    /*** Custom Rendering ***/

    beforeEach(inject(function($rootScope, $injector) {
        scope = $rootScope.$new();
        scope.samples = [{ name: 'India', fl: 'I' }, { name: 'China', fl: 'C' }, { name: 'America', fl: 'A' }];
        scope.cutomize = function(val) {
            return { name: val, fl: val.charAt(0) }
        };
        scope.deleteChip = function(obj) {
            return obj.name === 'India' ? false : true;
        };
        compile = $injector.get('$compile');
        template = '<chips ng-model="samples" render="cutomize(val)">' +
            '<chip-tmpl>' +
            '<div class="default-chip">{{chip.name}} , {{chip.fl}}<span class="glyphicon glyphicon-remove" remove-chip="deleteChip(obj)"></span></div>' +
            '</chip-tmpl>' +
            '<input chip-control></input>' +
            '</chips>';
        element = angular.element(template);
        compile(element)(scope);
        scope.$digest();
        isolateScope = element.isolateScope();
    }));

    it('check chips.list values', function() {
        expect(scope.samples).toEqual(isolateScope.chips.list);
    });

    it('check adding chip by passing string', function() {
        isolateScope.chips.addChip('Japan');
        expect(scope.samples[scope.samples.length - 1].name).toBe('Japan');
    });

    it('check deleting chip by passing string', function() {
        getChipScope(element,1).$broadcast('chip:delete')
        expect(scope.samples[1].name).not.toBe('China');
        expect(scope.samples[1].name).not.toBe('China');
    });

    it('check chip delete restriction', function() {
        getChipScope(element,0).$broadcast('chip:delete')
            // as per logic 'India' should not delete
        expect(scope.samples[0].name).toBe('India');
    });

});
