System.register(['angular2/core', './paging'], function(exports_1, context_1) {
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
    var core_1, paging_1;
    var GridComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (paging_1_1) {
                paging_1 = paging_1_1;
            }],
        execute: function() {
            GridComponent = (function () {
                function GridComponent() {
                    this.getPage = new core_1.EventEmitter();
                    this.allSelected = false;
                    this.selectedIds = [];
                    this.paging = new paging_1.Paging(0, 5);
                }
                GridComponent.prototype.ngOnChanges = function (changes) {
                    this.getItems();
                };
                GridComponent.prototype.getItems = function () {
                    this.page = this.gridSource.getPage(this.paging);
                    this.paging.pageCount = Math.ceil(this.page.totalItems / this.paging.pageSize);
                    this.log();
                };
                GridComponent.prototype.onSelectItem = function (id) {
                    if (this.selectedIds.indexOf(id, 0) >= 0) {
                        var index = this.selectedIds.indexOf(id, 0);
                        this.selectedIds.splice(index, 1);
                    }
                    else {
                        this.selectedIds.push(id);
                    }
                    if (this.page.totalItems == this.selectedIds.length) {
                        this.selectedIds = [];
                        this.allSelected = !this.allSelected;
                    }
                    this.log();
                };
                GridComponent.prototype.onSelectAll = function () {
                    if (this.allSelected && this.selectedIds.length > 0) {
                        this.allSelected = true;
                    }
                    else {
                        this.allSelected = !this.allSelected;
                    }
                    this.selectedIds = [];
                    this.log();
                };
                GridComponent.prototype.first = function () {
                    this.paging.pageIndex = 0;
                    this.getItems();
                };
                GridComponent.prototype.onPrev = function () {
                    this.paging.pageIndex--;
                    this.getItems();
                };
                GridComponent.prototype.onNext = function () {
                    this.paging.pageIndex++;
                    this.getItems();
                };
                GridComponent.prototype.last = function () {
                    this.paging.pageIndex = this.paging.pageCount - 1;
                    this.getItems();
                };
                GridComponent.prototype.prevDisabled = function () {
                    return this.paging.pageIndex == 0;
                };
                GridComponent.prototype.nextDisabled = function () {
                    return this.paging.pageIndex == this.paging.pageCount - 1;
                };
                GridComponent.prototype.isSelected = function (id) {
                    return (this.allSelected && this.selectedIds.indexOf(id, 0) == -1)
                        || (!this.allSelected && this.selectedIds.indexOf(id, 0) != -1);
                };
                GridComponent.prototype.isAllSelected = function () {
                    return this.allSelected && this.selectedIds.length == 0;
                };
                GridComponent.prototype.log = function () {
                    //console.log(this.selectedIds);
                    //console.log('' + this.isSelected(1) + this.isSelected(2) + this.isSelected(3) + this.isSelected(4));
                    this.pageDetails = 'page ' + (this.paging.pageIndex + 1) + ' of ' + this.paging.pageCount + ' totalItems:' + this.page.totalItems + ' allSelected:' + this.allSelected + ' selectedIds:[' + this.selectedIds + ']';
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