import { EventEmitter } from 'angular2/core';

export class Paging{
    private _pageIndex :  number;
    private _pageSize : number;
    private _totalCount : number;
    private _pageCount : number;
    private _pageSizes : number[]
    
    changed : EventEmitter<any>;
    
    constructor(pageIndex : number, pageSize : number){
        this._pageIndex = pageIndex;
        this._pageSize = pageSize;
        
        this.changed = new EventEmitter<any>();
    }
    
    set totalCount(totalCount : number){
        this._totalCount = totalCount;
        this._pageCount = Math.ceil(this._totalCount / this._pageSize);
    }
    
    first(){
        this._pageIndex = 0;
        this.changed.emit(null);
    }
    
    prev(){
        this._pageIndex--;
        this.changed.emit(null);
    }
    
    next(){
        this._pageIndex++;
        this.changed.emit(null);
    }
    
    last(){
        this._pageIndex = this._pageCount - 1;
        this.changed.emit(null);
    }
    
    get prevDisabled() : boolean{
        return this._pageIndex == 0;
    }
    
    get nextDisabled() : boolean{
        return this._pageIndex == this._pageCount - 1;
    }
    
    get text() : string{
        let fromItem : number = (this._pageIndex * this._pageSize) + 1;
        let toItem : number = (this._pageIndex + 1) * this._pageSize;
        toItem = this._totalCount < toItem ? this._totalCount : toItem;
        
        if (fromItem == toItem){
            return `Page ${this._pageIndex + 1} of ${this._pageCount}, Item ${fromItem} of ${this._totalCount} Total Items`;
        } else{
            return `Page ${this._pageIndex + 1} of ${this._pageCount}, Items ${fromItem} to ${toItem} of ${this._totalCount} Total Items`;
        }
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
        if (this._pageSize != pageSize){
            this._pageSize = pageSize;
            this.changed.emit(null);
        }
    } 
    
    get pageSizes() : number[]{
        return this._pageSizes;
    }   
    
    set pageSizes(pageSizes : number[]){
        this._pageSizes = pageSizes;
    }
    
    get totalCount() : number{
        return this._totalCount;
    }
}