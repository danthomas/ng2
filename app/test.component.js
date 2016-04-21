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
    var Thing, ChildComponent, TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Thing = (function () {
                function Thing(name) {
                    this.name = name;
                }
                return Thing;
            }());
            ChildComponent = (function () {
                function ChildComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Thing)
                ], ChildComponent.prototype, "thing", void 0);
                ChildComponent = __decorate([
                    core_1.Component({
                        template: "\n    <input [(ngModel)]=\"thing.name\" type=\"text\" />\n    ",
                        selector: 'child'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComponent);
                return ChildComponent;
            }());
            exports_1("ChildComponent", ChildComponent);
            TestComponent = (function () {
                function TestComponent() {
                    this._thing = new Thing('dan');
                }
                TestComponent.prototype.click = function () {
                    console.log(this._thing.name);
                };
                TestComponent = __decorate([
                    core_1.Component({
                        template: "    \n    <button (click)=\"click()\">Click</button>\n   <child [thing]=\"_thing\"></child>\n    ", directives: [ChildComponent]
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