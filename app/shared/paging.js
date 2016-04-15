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
                    this.pageIndex = 0;
                    this.pageSize = 5;
                    this.pageIndex = pageIndex;
                    this.pageSize = pageSize;
                    this.changed = new core_1.EventEmitter();
                }
                Paging.prototype.first = function () {
                    this.pageIndex = 0;
                    this.changed.emit(0);
                };
                Paging.prototype.prev = function () {
                    this.pageIndex--;
                    this.changed.emit(0);
                };
                Paging.prototype.next = function () {
                    this.pageIndex++;
                    this.changed.emit(0);
                };
                Paging.prototype.last = function () {
                    this.pageIndex = this.pageCount - 1;
                    this.changed.emit(0);
                };
                return Paging;
            }());
            exports_1("Paging", Paging);
        }
    }
});
//# sourceMappingURL=paging.js.map