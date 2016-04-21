System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PageData;
    return {
        setters:[],
        execute: function() {
            PageData = (function () {
                function PageData(items, pageIndex, totalCount, pageSizes) {
                    this.items = items;
                    this.pageIndex = pageIndex;
                    this.totalCount = totalCount;
                    this.pageSizes = pageSizes;
                }
                return PageData;
            }());
            exports_1("PageData", PageData);
        }
    }
});
//# sourceMappingURL=pageData.js.map