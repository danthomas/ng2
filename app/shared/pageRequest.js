System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PageRequest;
    return {
        setters:[],
        execute: function() {
            PageRequest = (function () {
                function PageRequest(pageIndex, pageSize) {
                    this.pageIndex = pageIndex;
                    this.pageSize = pageSize;
                }
                return PageRequest;
            }());
            exports_1("PageRequest", PageRequest);
        }
    }
});
//# sourceMappingURL=pageRequest.js.map