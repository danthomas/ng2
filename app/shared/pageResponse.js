System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PageResponse;
    return {
        setters:[],
        execute: function() {
            PageResponse = (function () {
                function PageResponse(items, pageIndex, totalCount, pageSizes) {
                    this.items = items;
                    this.pageIndex = pageIndex;
                    this.totalCount = totalCount;
                    this.pageSizes = pageSizes;
                }
                return PageResponse;
            }());
            exports_1("PageResponse", PageResponse);
        }
    }
});
//# sourceMappingURL=pageResponse.js.map