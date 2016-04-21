import { Component, Input, Output, OnChanges, SimpleChange, EventEmitter } from 'angular2/core';
import { PageDetails } from './pageDetails';

@Component({
    template: `Page Size:
    <select [ngModel]="pageSize" (change)="onPageSizeChanged($event.target.value)">
        <option *ngFor="#pageSize of pageSizes">{{pageSize}}</option>
    </select>
 <div>    paging
    <button class='btn btn-primary' (click)='first()' [disabled]='prevDisabled'>First</button>
    <button class='btn btn-primary' (click)='prev()' [disabled]='prevDisabled'>Prev</button>
    <button class='btn btn-primary' (click)='next()' [disabled]='nextDisabled'>Next</button>
    <button class='btn btn-primary' (click)='last()' [disabled]='nextDisabled'>Last</button>
</div>`,
    selector: 'paging'
})
export class Paging{
    @Input() pageDetails : PageDetails;

    @Output() changed : EventEmitter<any>;

    constructor(){
        this.changed = new EventEmitter<any>();
    }

    onPageSizeChanged(pageSize : number){
        this.pageDetails.pageSize = +pageSize;
        this.changed.emit(null);
    }

    first(){
        this.pageDetails.first();
        this.changed.emit(null);
    }

    prev(){
        this.pageDetails.prev();
        this.changed.emit(null);
    }

    next(){
        this.pageDetails.next();
        this.changed.emit(null);
    }

    last(){
        this.pageDetails.last();
        this.changed.emit(null);
    }

    get prevDisabled() : boolean{
        return this.pageDetails.pageIndex == 0;
    }

    get nextDisabled() : boolean{
        return this.pageDetails.pageIndex == this.pageDetails.pageCount - 1;
    }

    get pageIndex() : number{
        return this.pageDetails.pageIndex;
    }

    set pageIndex(pageIndex : number){
        this.pageDetails.pageIndex = pageIndex;
    }

    get pageSize() : number{
        return this.pageDetails.pageSize;
    }

    set pageSize(pageSize : number){
        if (this.pageDetails.pageSize != pageSize){
            this.pageDetails.pageSize = pageSize;
            this.changed.emit(null);
        }
    }

    get pageSizes() : number[]{
        return this.pageDetails.pageSizes;
    }

    set pageSizes(pageSizes : number[]){
        this.pageDetails.pageSizes = pageSizes;
    }

    get allSelected() : boolean{
        return this.pageDetails.allSelected;
    }

    set allSelected(allSelected : boolean){
        this.pageDetails.allSelected = allSelected;
    }

    get totalCount() : number{
        return this.pageDetails.totalCount;
    }
}