import { EventEmitter } from 'angular2/core';

export class Paging{
    pageIndex :  number = 0;
    pageSize : number = 5;
    pageCount : number;
    changed : EventEmitter<number>;
    
    constructor(pageIndex : number, pageSize : number){
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
        this.changed = new EventEmitter<number>();
    }
    
    first(){
        this.pageIndex = 0;
        this.changed.emit(0);
    }
    
    prev(){
        this.pageIndex--;
        this.changed.emit(0);
    }
    
    next(){
        this.pageIndex++;
        this.changed.emit(0);
    }
    
    last(){
        this.pageIndex = this.pageCount - 1;
        this.changed.emit(0);
    }
}