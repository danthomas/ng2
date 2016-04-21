System.register(['angular2/core', './page'], function(exports_1, context_1) {
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
    var core_1, page_1;
    var Paging;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            Paging = (function () {
                function Paging() {
                    this.changed = new core_1.EventEmitter();
                }
                Paging.prototype.first = function () {
                    this.pageDetails.first();
                    this.changed.emit(null);
                };
                Paging.prototype.prev = function () {
                    this.pageDetails.prev();
                    this.changed.emit(null);
                };
                Paging.prototype.next = function () {
                    this.pageDetails.next();
                    this.changed.emit(null);
                };
                Paging.prototype.last = function () {
                    this.pageDetails.last();
                    this.changed.emit(null);
                };
                Object.defineProperty(Paging.prototype, "prevDisabled", {
                    get: function () {
                        return this.pageDetails.pageIndex == 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Paging.prototype, "nextDisabled", {
                    get: function () {
                        return this.pageDetails.pageIndex == this.pageDetails.pageCount - 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Paging.prototype, "pageIndex", {
                    get: function () {
                        return this.pageDetails.pageIndex;
                    },
                    set: function (pageIndex) {
                        this.pageDetails.pageIndex = pageIndex;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Paging.prototype, "pageSize", {
                    get: function () {
                        return this.pageDetails.pageSize;
                    },
                    set: function (pageSize) {
                        if (this.pageDetails.pageSize != pageSize) {
                            this.pageDetails.pageSize = pageSize;
                            this.changed.emit(null);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Paging.prototype, "pageSizes", {
                    get: function () {
                        return this.pageDetails.pageSizes;
                    },
                    set: function (pageSizes) {
                        this.pageDetails.pageSizes = pageSizes;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Paging.prototype, "allSelected", {
                    get: function () {
                        return this.pageDetails.allSelected;
                    },
                    set: function (allSelected) {
                        this.pageDetails.allSelected = allSelected;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Paging.prototype, "totalCount", {
                    get: function () {
                        return this.pageDetails.totalCount;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', (typeof (_a = typeof page_1.PageDetails !== 'undefined' && page_1.PageDetails) === 'function' && _a) || Object)
                ], Paging.prototype, "pageDetails", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Paging.prototype, "changed", void 0);
                Paging = __decorate([
                    core_1.Component({
                        template: "\n <div>    paging\n    <button class='btn btn-primary' (click)='first()' [disabled]='prevDisabled'>First</button>\n    <button class='btn btn-primary' (click)='prev()' [disabled]='prevDisabled'>Prev</button>\n    <button class='btn btn-primary' (click)='next()' [disabled]='nextDisabled'>Next</button>\n    <button class='btn btn-primary' (click)='last()' [disabled]='nextDisabled'>Last</button>\n</div>",
                        selector: 'paging'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Paging);
                return Paging;
                var _a;
            }());
            exports_1("Paging", Paging);
        }
    }
});
//# sourceMappingURL=paging.component.js.map