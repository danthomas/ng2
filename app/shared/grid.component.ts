import { Component, Input, Output, OnChanges, SimpleChange, EventEmitter } from 'angular2/core';
import { Column } from './column';
import { IGridSource } from './igridSource';
import { Page } from './page';
import { Paging } from './paging';


@Component({
    templateUrl: 'app/shared/grid.component.html',
    selector: 'grid'
})
export class GridComponent implements OnChanges{
    @Input() gridSource : IGridSource
    @Input() columns : Column[];
    @Output() getPage: EventEmitter<number> = new EventEmitter<number>();
    
    page : Page;
    pageDetails : string;
    allSelected : boolean = false;
    selectedIds : number[] = [];
    paging : Paging = new Paging(0, 5);
    
    constructor(){
        this.paging.changed.subscribe((i) => {
            this.getItems();
        });
    }
    
    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        this.getItems();
    }
    
    getItems(){
        this.page = this.gridSource.getPage(this.paging);
        this.paging.pageCount = Math.ceil(this.page.totalItems / this.paging.pageSize);
        this.log();
    }
        
    onSelectItem(id){
        if (this.selectedIds.indexOf(id, 0) >= 0){
            var index = this.selectedIds.indexOf(id, 0);
            this.selectedIds.splice(index, 1);     
        } else{
            this.selectedIds.push(id);
        }        
        
        if (this.page.totalItems == this.selectedIds.length){
                this.selectedIds = [];
                this.allSelected = !this.allSelected;   
        } 
        
        this.log();
    }
        
    onSelectAll(){
        if (this.allSelected && this.selectedIds.length > 0){
            this.allSelected = true;
        } else{
            this.allSelected = !this.allSelected;            
        }
            
        this.selectedIds = [];
        this.log();
    }
    
    first(){
        this.paging.first();
    }
    
    onPrev(){
        this.paging.prev();
    }
    
    onNext(){
        this.paging.next();
    }
    
    last(){
        this.paging.last();
    }
    
    prevDisabled(){
        return this.paging.pageIndex == 0;
    }
    
    nextDisabled(){
        return this.paging.pageIndex == this.paging.pageCount - 1;
    }
    
    isSelected(id){
        return (this.allSelected && this.selectedIds.indexOf(id, 0) == -1)
        || (!this.allSelected && this.selectedIds.indexOf(id, 0) != -1);
    }
    
    isAllSelected(){
        return this.allSelected && this.selectedIds.length == 0;
    }
    
    log(){
        //console.log(this.selectedIds);
        //console.log('' + this.isSelected(1) + this.isSelected(2) + this.isSelected(3) + this.isSelected(4));
        
               
        this.pageDetails = 'page ' + (this.paging.pageIndex + 1) + ' of ' + this.paging.pageCount + ' totalItems:' + this.page.totalItems + ' allSelected:' + this.allSelected + ' selectedIds:[' + this.selectedIds + ']';
    }
}

