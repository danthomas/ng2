export class Paging{
    pageIndex :  number = 0;
    pageSize : number = 5;
    pageCount : number;
    
    constructor(pageIndex : number, pageSize : number){
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
    }
}