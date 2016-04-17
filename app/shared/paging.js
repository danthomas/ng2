System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var Paging;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Paging = (function () {
                function Paging(pageIndex, pageSize) {
                    this._pageIndex = pageIndex;
                    this._pageSize = pageSize;
                    this.changed = new core_1.EventEmitter();
                }
                Object.defineProperty(Paging.prototype, "totalCount", {
                    get: function () {
                        return this._totalCount;
                    },
                    set: function (totalCount) {
                        this._totalCount = totalCount;
                        this._pageCount = Math.ceil(this._totalCount / this._pageSize);
                    },
                    enumerable: true,
                    configurable: true
                });
                Paging.prototype.first = function () {
                    this._pageIndex = 0;
                    this.changed.emit(null);
                };
                Paging.prototype.prev = function () {
                    this._pageIndex--;
                    this.changed.emit(null);
                };
                Paging.prototype.next = function () {
                    this._pageIndex++;
                    this.changed.emit(null);
                };
                Paging.prototype.last = function () {
                    this._pageIndex = this._pageCount - 1;
                    this.changed.emit(null);
                };
                Object.defineProperty(Paging.prototype, "prevDisabled", {
                    get: function () {
                        return this._pageIndex == 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Paging.prototype, "nextDisabled", {
                    get: function () {
                        return this._pageIndex == this._pageCount - 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Paging.prototype, "text", {
                    get: function () {
                        var fromItem = (this._pageIndex * this._pageSize) + 1;
                        var toItem = (this._pageIndex + 1) * this._pageSize;
                        toItem = this._totalCount < toItem ? this._totalCount : toItem;
                        if (fromItem == toItem) {
                            return "Page " + (this._pageIndex + 1) + " of " + this._pageCount + ", Item " + fromItem + " of " + this._totalCount + " Total Items";
                        }
                        else {
                            return "Page " + (this._pageIndex + 1) + " of " + this._pageCount + ", Items " + fromItem + " to " + toItem + " of " + this._totalCount + " Total Items";
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Paging.prototype, "pageIndex", {
                    get: function () {
                        return this._pageIndex;
                    },
                    set: function (pageIndex) {
                        this._pageIndex = pageIndex;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Paging.prototype, "pageSize", {
                    get: function () {
                        return this._pageSize;
                    },
                    set: function (pageSize) {
                        if (this._pageSize != pageSize) {
                            this._pageSize = pageSize;
                            this.changed.emit(null);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Paging.prototype, "pageSizes", {
                    get: function () {
                        return this._pageSizes;
                    },
                    set: function (pageSizes) {
                        this._pageSizes = pageSizes;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Paging;
            }());
            exports_1("Paging", Paging);
        }
    }
});
//# sourceMappingURL=paging.js.map