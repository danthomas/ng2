System.register(['angular2/core', './shared/grid.component', './shared/column'], function(exports_1, context_1) {
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
    var core_1, grid_component_1, column_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grid_component_1_1) {
                grid_component_1 = grid_component_1_1;
            },
            function (column_1_1) {
                column_1 = column_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent() {
                    this.items = [
                        [1, 'thomasd', 'asfas', 'dd'],
                        [2, 'jonesg', 'asfas', 'dd'],
                        [3, 'smithp', 'asfas', 'dd']
                    ];
                    this.columns = [
                        new column_1.Column("User NameX"),
                        new column_1.Column("First NameX"),
                        new column_1.Column("Last NameX")];
                }
                ListComponent.prototype.ngOnInit = function () {
                };
                ListComponent = __decorate([
                    core_1.Component({
                        template: '<grid [items]="items" [columns]="columns"></grid>',
                        directives: [grid_component_1.GridComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map