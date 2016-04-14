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
    var GridComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GridComponent = (function () {
                function GridComponent() {
                    this.allSelected = false;
                    this.selectedIds = [];
                    this.totalItems = 0;
                }
                GridComponent.prototype.ngOnChanges = function (changes) {
                    this.totalItems = changes['items'].currentValue.length;
                };
                GridComponent.prototype.onSelectItem = function (id) {
                    if (this.selectedIds.indexOf(id, 0) >= 0) {
                        var index = this.selectedIds.indexOf(id, 0);
                        this.selectedIds.splice(index, 1);
                    }
                    else {
                        this.selectedIds.push(id);
                    }
                    if (this.totalItems == this.selectedIds.length) {
                        if (!this.allSelected) {
                            this.selectedIds = [];
                        }
                        this.allSelected = true;
                    }
                    else {
                        this.allSelected = false;
                    }
                };
                GridComponent.prototype.onSelectAll = function () {
                    this.allSelected = !this.allSelected;
                };
                GridComponent.prototype.isSelected = function (id) {
                    return this.allSelected || this.selectedIds.indexOf(id, 0) >= 0;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], GridComponent.prototype, "items", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], GridComponent.prototype, "columns", void 0);
                GridComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/shared/grid.component.html',
                        selector: 'grid'
                    }), 
                    __metadata('design:paramtypes', [])
                ], GridComponent);
                return GridComponent;
            }());
            exports_1("GridComponent", GridComponent);
        }
    }
});
//# sourceMappingURL=grid.component.js.map