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
    
    get prevDisabled(){
        return this._pageIndex == 0;
    }
    
    get nextDisabled(){
        return this._pageIndex == this._pageCount - 1;
    }
    
    get text(){
        return `Page ${this._pageIndex + 1} of ${this._pageCount} , Total Count: ${this._totalCount}`;
    }
    
    get pageIndex(){
        return this._pageIndex;
    }
    
    set pageIndex(pageIndex : number){
        this._pageIndex = pageIndex;
    }
    
    get pageSize(){
        return this._pageSize;
    }
    
    set pageSize(pageSize : number){
        if (this._pageSize != pageSize){
            this._pageSize = pageSize;
            this.changed.emit(null);
        }
    } 
    
    get pageSizes(){
        return this._pageSizes;
    }   
    
    set pageSizes(pageSizes : number[]){
        this._pageSizes = pageSizes;
    }
    
    get totalCount(){
        return this._totalCount;
    }
}