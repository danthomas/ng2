export class Page{
    items : any[][];
    pageIndex : number;
    totalCount : number;
    pageSizes : number[];

    constructor(items : any[][], pageIndex : number, totalCount : number, pageSizes : number[]){
        this.items = items;
        this.pageIndex = pageIndex;
        this.totalCount = totalCount;
        this.pageSizes = pageSizes;
    }
}