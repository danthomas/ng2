System.register(['angular2/core', './shared/grid.component', './shared/column', './shared/page'], function(exports_1, context_1) {
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
    var core_1, grid_component_1, column_1, page_1;
    var ListComponent, TestGrid;
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
            },
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent() {
                    this.gridSource = new TestGrid();
                    this.columns = [
                        new column_1.Column("User NameX"),
                        new column_1.Column("First NameX"),
                        new column_1.Column("Last NameX")];
                }
                ListComponent.prototype.ngOnInit = function () {
                };
                ListComponent = __decorate([
                    core_1.Component({
                        template: '<grid [columns]="columns" [gridSource]="gridSource"></grid>',
                        directives: [grid_component_1.GridComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
            TestGrid = (function () {
                function TestGrid() {
                    this.items = [
                        [1, '1thomasd', 'asfas', 'dd'],
                        [2, '2jonesg', 'asfas', 'dd'],
                        [3, '3smithp', 'asfas', 'dd'],
                        [4, '4browna', 'brown', 'al'],
                        [5, '5browna', 'brown', 'al'],
                        [6, '6sfasdf', 'asfas', 'dd'],
                        [7, '7jgha;g', 'asfas', 'dd'],
                        [8, '8ywtqyw', 'asfas', 'dd'],
                        [9, '9vjzx,c', 'brown', 'al'],
                        [10, '10hgakd', 'brown', 'al'],
                        [11, '11jonesg', 'asfas', 'dd'],
                        [12, '12jonesg', 'asfas', 'dd'],
                        [13, '13jonesg', 'asfas', 'dd'],
                        [14, '14jonesg', 'asfas', 'dd'],
                        [15, '15jonesg', 'asfas', 'dd'],
                        [16, '16smithp', 'asfas', 'dd'],
                        [17, '17browna', 'brown', 'al'],
                        [18, '18browna', 'brown', 'al'],
                        [19, '19sfasdf', 'asfas', 'dd'],
                        [20, '20jgha;g', 'asfas', 'dd'],
                        [21, '21ywtqyw', 'asfas', 'dd'],
                        [22, '2jonesg', 'asfas', 'dd'],
                        [23, '3smithp', 'asfas', 'dd'],
                        [24, '4browna', 'brown', 'al'],
                        [25, '5browna', 'brown', 'al'],
                        [26, '6sfasdf', 'asfas', 'dd'],
                        [27, '7jgha;g', 'asfas', 'dd'],
                        [28, '8ywtqyw', 'asfas', 'dd'],
                        [29, '9vjzx,c', 'brown', 'al'],
                        [30, '10hgakd', 'brown', 'al'],
                        [31, '11jonesg', 'asfas', 'dd'],
                        [32, '12jonesg', 'asfas', 'dd'],
                        [33, '13jonesg', 'asfas', 'dd'],
                        [34, '14jonesg', 'asfas', 'dd'],
                        [35, '15jonesg', 'asfas', 'dd'],
                        [36, '16smithp', 'asfas', 'dd'],
                        [37, '17browna', 'brown', 'al'],
                        [38, '18browna', 'brown', 'al'],
                        [39, '19sfasdf', 'asfas', 'dd'],
                        [40, '20jgha;g', 'asfas', 'dd'],
                        [41, '21ywtqyw', 'asfas', 'dd']
                    ];
                }
                TestGrid.prototype.getPage = function (pageDetails) {
                    console.log('getting data');
                    var totalCount = this.items.length;
                    var pageIndex = pageDetails.pageIndex;
                    var startIndex = pageDetails.pageIndex * pageDetails.pageSize;
                    if (pageDetails.pageIndex * pageDetails.pageSize > totalCount) {
                        pageIndex = Math.floor(totalCount / pageDetails.pageSize);
                        startIndex = pageIndex * pageDetails.pageSize;
                    }
                    var endIndex = startIndex + pageDetails.pageSize;
                    return new page_1.Page(this.items.slice(startIndex, endIndex), pageIndex, totalCount, [5, 10, 25, 50, 100]);
                };
                return TestGrid;
            }());
            exports_1("TestGrid", TestGrid);
        }
    }
});
//# sourceMappingURL=list.component.js.map