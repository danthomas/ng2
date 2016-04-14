System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent() {
                    this.value = 'abcd';
                    this.allSelected = false;
                    this.selected = [true, false, true];
                }
                TestComponent.prototype.isSelected = function (index) {
                    return this.allSelected || this.selected[index];
                };
                TestComponent.prototype.onAllSelectedClick = function (index) {
                    this.allSelected = !this.allSelected;
                    this.log();
                };
                TestComponent.prototype.onClick = function (index) {
                    this.selected[index] = !this.selected[index];
                    this.log();
                };
                TestComponent.prototype.log = function () {
                    this.logDetails = '' + this.allSelected + ' : ' + this.selected;
                };
                TestComponent = __decorate([
                    core_1.Component({
                        template: "    \n    \n    <div>{{logDetails}}</div>\n    \n    \n    <div><input type='checkBox' [ngModel]='allSelected' (click)='onAllSelectedClick()' /></div>\n    \n    <div><input type='checkBox' [ngModel]='isSelected(0)' (click)='onClick(0)' /></div>\n    <div><input type='checkBox' [ngModel]='isSelected(1)' (click)='onClick(1)'/></div>\n    <div><input type='checkBox' [ngModel]='isSelected(2)' (click)='onClick(2)'/></div>\n    \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestComponent);
                return TestComponent;
            }());
            exports_1("TestComponent", TestComponent);
        }
    }
});
//# sourceMappingURL=test.component.js.map