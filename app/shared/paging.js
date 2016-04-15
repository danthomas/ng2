System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Paging;
    return {
        setters:[],
        execute: function() {
            Paging = (function () {
                function Paging(pageIndex, pageSize) {
                    this.pageIndex = 0;
                    this.pageSize = 5;
                    this.pageIndex = pageIndex;
                    this.pageSize = pageSize;
                }
                return Paging;
            }());
            exports_1("Paging", Paging);
        }
    }
});
//# sourceMappingURL=paging.js.map