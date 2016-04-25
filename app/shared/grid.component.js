System.register(['angular2/core', './pageDetails', './paging.component'], function(exports_1, context_1) {
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
    var core_1, pageDetails_1, paging_component_1;
    var GridComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pageDetails_1_1) {
                pageDetails_1 = pageDetails_1_1;
            },
            function (paging_component_1_1) {
                paging_component_1 = paging_component_1_1;
            }],
        execute: function() {
            GridComponent = (function () {
                function GridComponent() {
                    var _this = this;
                    this.getPage = new core_1.EventEmitter();
                    this.pageDetails = new pageDetails_1.PageDetails(0, 10);
                    this.pageDetails.getPage.subscribe(function (pageRequest) {
                        _this.getItems(pageRequest);
                    });
                }
                GridComponent.prototype.ngOnChanges = function (changes) {
                    this.pageDetails.pageSource = changes["gridSource"].currentValue;
                };
                GridComponent.prototype.getItems = function (pageRequest) {
                    this.pageDetails.update(this.gridSource.getPage(pageRequest));
                };
                GridComponent.prototype.onSelectItem = function (id) {
                    this.pageDetails.selectItem(id);
                };
                GridComponent.prototype.onSelectAll = function () {
                    this.pageDetails.selectAll();
                };
                GridComponent.prototype.isSelected = function (id) {
                    return (this.pageDetails.allSelected && this.pageDetails.selectedIds.indexOf(id, 0) == -1)
                        || (!this.pageDetails.allSelected && this.pageDetails.selectedIds.indexOf(id, 0) != -1);
                };
                GridComponent.prototype.isAllSelected = function () {
                    return this.pageDetails.allSelected && this.pageDetails.selectedIds.length == 0;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], GridComponent.prototype, "gridSource", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], GridComponent.prototype, "columns", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], GridComponent.prototype, "getPage", void 0);
                GridComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/shared/grid.component.html',
                        selector: 'grid',
                        directives: [paging_component_1.Paging],
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