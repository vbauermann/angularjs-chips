"use strict";
describe('Directive chips : Basic flow', function() {

    beforeEach(module('angularjs.chips'));

    var element, scope, compile, template, isolateScope, timeout;

    /*** Basic flow ***/

    beforeEach(inject(function($rootScope, $injector) {
        scope = $rootScope.$new();
        scope.newlySelectedCompanie;
        scope.companies = ['Apple', 'Cisco', 'Verizon', 'Microsoft'];
        scope.availableCompanies = ['ACCO Brands',
            'Accuquote',
            'Accuride Corporation',
            'Ace Hardware',
            'Google',
            'FaceBook',
            'Paypal',
            'Pramati',
            'Bennigan',
            'Berkshire Hathaway',
            'Berry Plastics',
            'Best Buy',
            'Carlisle Companies',
            'Carlson Companies',
            'Carlyle Group',
            'Denbury Resources',
            'Denny',
            'Dentsply',
            'Ebonite International',
            'EBSCO Industries',
            'EchoStar',
            'Gateway, Inc.',
            'Gatorade',
            'Home Shopping Network',
            'Honeywell',
        ];
        compile = $injector.get('$compile');
        template = '<chips ng-model="companies">' +
            '<chip-tmpl>' +
            '<div class="default-chip">' +
            '{{chip}}' +
            '<span class="glyphicon glyphicon-remove" remove-chip></span>' +
            '</div>' +
            '</chip-tmpl>' +
            '<input ng-model-control ng-model="newlySelectedCompanie" uib-typeahead="company for company in availableCompanies | filter:$viewValue"></input>' +
            '</chips>';


        element = angular.element(template);
        compile(element)(scope);
        scope.$digest();
        isolateScope = element.isolateScope();
    }));

    it('check chips.list values', function() {
        expect(scope.companies).toEqual(isolateScope.chips.list);
    });

    it('adding chip through ng-model',function(){
		scope.newlySelectedCompanie = 'EchoStar';
		scope.$digest();
		expect(scope.companies[scope.companies.length-1]).toBe('EchoStar');
    });

    it('check focus and blur on INPUT element ',function(){
        var focusEvent = new Event('focus')
        expect(element.hasClass('chip-out-focus')).toBe(true);
        element.find('INPUT')[0].dispatchEvent(focusEvent);
        expect(element.hasClass('chip-in-focus')).toBe(true);

        var blurEvent = new Event('blur');
        element.find('INPUT')[0].dispatchEvent(blurEvent);
        expect(element.hasClass('chip-out-focus')).toBe(true);
    });

});
