import { PageData } from './PageData';

export class PageDetails{
    private _allSelected : boolean;
    private _pageIndex :  number;
    private _pageSize : number;
    private _totalCount : number;
    private _pageCount : number;
    private _pageSizes : number[];
    private _items: any[][];
    private _text: string;

    constructor(pageIndex : number, pageSize : number){
        this._pageIndex = pageIndex;
        this._pageSize = pageSize;
    }

    update(page : PageData){
        this._pageIndex = page.pageIndex;
        this._totalCount = page.totalCount;
        this._pageSizes = page.pageSizes;
        this._pageCount = Math.ceil(this._totalCount / this._pageSize);

        this.updateText();
    }

    updateText() : void{
        let fromItem : number = (this._pageIndex * this._pageSize) + 1;
        let toItem : number = (this._pageIndex + 1) * this._pageSize;
        toItem = this._totalCount < toItem ? this._totalCount : toItem;
        let ret : string = '';

        if (fromItem == toItem){
            ret = `Page ${this._pageIndex + 1} of ${this._pageCount}, Item ${fromItem} of ${this._totalCount} Items`;
        } else{
            ret = `Page ${this._pageIndex + 1} of ${this._pageCount}, Items ${fromItem} to ${toItem} of ${this._totalCount} Items`;
        }

        if (this._allSelected){
            ret += " all items selected";
        }

        this._text = ret;
    }

    first(){
        this.pageIndex = 0;
    }

    prev(){
        this.pageIndex--;
    }

    next(){
        this.pageIndex++;
    }

    last(){
        this.pageIndex = this.pageCount - 1;
    }

    get pageIndex() : number{
        return this._pageIndex;
    }

    set pageIndex(pageIndex : number){
        this._pageIndex = pageIndex;
    }

    get pageSize() : number{
        return this._pageSize;
    }

    get pageCount() : number{
        return this._pageCount;
    }

    get totalCount() : number{
        return this._totalCount;
    }

    get allSelected() : boolean{
        return this._allSelected;
    }

    get pageSizes() : number[]{
        return this._pageSizes;
    }

    get text() : string{
        return this._text;
    }
}