System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PageDetails;
    return {
        setters:[],
        execute: function() {
            PageDetails = (function () {
                function PageDetails(pageIndex, pageSize) {
                    this._pageIndex = pageIndex;
                    this._pageSize = pageSize;
                }
                PageDetails.prototype.update = function (page) {
                    this._pageIndex = page.pageIndex;
                    this._totalCount = page.totalCount;
                    this._pageSizes = page.pageSizes;
                    this._pageCount = Math.ceil(this._totalCount / this._pageSize);
                    this.updateText();
                };
                PageDetails.prototype.updateText = function () {
                    var fromItem = (this._pageIndex * this._pageSize) + 1;
                    var toItem = (this._pageIndex + 1) * this._pageSize;
                    toItem = this._totalCount < toItem ? this._totalCount : toItem;
                    var ret = '';
                    if (fromItem == toItem) {
                        ret = "Page " + (this._pageIndex + 1) + " of " + this._pageCount + ", Item " + fromItem + " of " + this._totalCount + " Items";
                    }
                    else {
                        ret = "Page " + (this._pageIndex + 1) + " of " + this._pageCount + ", Items " + fromItem + " to " + toItem + " of " + this._totalCount + " Items";
                    }
                    if (this._allSelected) {
                        ret += " all items selected";
                    }
                    this._text = ret;
                };
                PageDetails.prototype.first = function () {
                    this.pageIndex = 0;
                };
                PageDetails.prototype.prev = function () {
                    this.pageIndex--;
                };
                PageDetails.prototype.next = function () {
                    this.pageIndex++;
                };
                PageDetails.prototype.last = function () {
                    this.pageIndex = this.pageCount - 1;
                };
                Object.defineProperty(PageDetails.prototype, "pageIndex", {
                    get: function () {
                        return this._pageIndex;
                    },
                    set: function (pageIndex) {
                        this._pageIndex = pageIndex;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PageDetails.prototype, "pageSize", {
                    get: function () {
                        return this._pageSize;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PageDetails.prototype, "pageCount", {
                    get: function () {
                        return this._pageCount;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PageDetails.prototype, "totalCount", {
                    get: function () {
                        return this._totalCount;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PageDetails.prototype, "allSelected", {
                    get: function () {
                        return this._allSelected;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PageDetails.prototype, "pageSizes", {
                    get: function () {
                        return this._pageSizes;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PageDetails.prototype, "text", {
                    get: function () {
                        return this._text;
                    },
                    enumerable: true,
                    configurable: true
                });
                return PageDetails;
            }());
            exports_1("PageDetails", PageDetails);
        }
    }
});
//# sourceMappingURL=pageDetails.js.map