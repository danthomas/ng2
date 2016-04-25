import { PageResponse } from './PageResponse';

export class PageDetails{
    private _allSelected : boolean;
    private _selectedIds : number[] = [];
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

    update(pageResponse : PageResponse){
        this._items = pageResponse.items;
        this._pageIndex = pageResponse.pageIndex;
        this._totalCount = pageResponse.totalCount;
        this._pageSizes = pageResponse.pageSizes;
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
            if (this._selectedIds.length == 0){
                ret += ` all ${this._totalCount} items selected`;
            } else {
                ret += ` ${this._totalCount - this._selectedIds.length} of ${this._totalCount} items selected`;
            }
        }
        else {
            if (this._selectedIds.length == 0){
                ret += " no items selected";
            } else {
                ret += ` ${this._selectedIds.length} of ${this._totalCount} items selected`;
            }
        }
        this._text = ret;
    }

    selectItem(id : number){
        if (this.selectedIds.indexOf(id, 0) >= 0){
            var index = this.selectedIds.indexOf(id, 0);
            this.selectedIds.splice(index, 1);
        } else{
            this.selectedIds.push(id);
        }

        if (this.totalCount == this.selectedIds.length){
                this.selectedIds = [];
                this.allSelected = !this.allSelected;
        }

        this.updateText();
    }

    selectAll(){
        if (!this._allSelected || this.selectedIds.length == 0){
            this._allSelected = !this._allSelected;
        }

        this.selectedIds = [];

        this.updateText();
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

    get items() : any[][]{
        return this._items;
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

    set pageSize(pageSize : number){
        this._pageSize = pageSize;
    }

    get pageCount() : number{
        return this._pageCount;
    }

    get totalCount() : number{
        return this._totalCount;
    }

    get selectedIds() : number[]{
        return this._selectedIds;
    }

    set selectedIds(selectedIds : number[]){
        this._selectedIds = selectedIds;
        this.updateText();
    }

    get allSelected() : boolean{
        return this._allSelected;
    }

    set allSelected(allSelected : boolean){
        this._allSelected = allSelected;
        this.updateText();
    }

    get pageSizes() : number[]{
        return this._pageSizes;
    }

    get text() : string{
        return this._text;
    }
}