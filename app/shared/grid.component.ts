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
    paging : Paging = new Paging(0, 10);
    
    constructor(){
        this.paging.changed.subscribe(() => {
            this.getItems();
        });
    }
    
    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        this.getItems();
    }
    
    getItems(){
        this.page = this.gridSource.getPage(this.paging);
        this.paging.pageIndex = this.page.pageIndex;
        this.paging.totalCount = this.page.totalCount;
        this.paging.pageSizes = this.page.pageSizes;
        this.updateDetails();
    }
        
    onSelectItem(id : number){
        if (this.selectedIds.indexOf(id, 0) >= 0){
            var index = this.selectedIds.indexOf(id, 0);
            this.selectedIds.splice(index, 1);     
        } else{
            this.selectedIds.push(id);
        }        
        
        if (this.page.totalCount == this.selectedIds.length){
                this.selectedIds = [];
                this.allSelected = !this.allSelected;   
        }        
        this.updateDetails();
    }
        
    onSelectAll(){
        if (this.allSelected && this.selectedIds.length > 0){
            this.allSelected = true;
        } else{
            this.allSelected = !this.allSelected;            
        }
            
        this.selectedIds = [];
        this.updateDetails();
    }
    
    onPageSizeChanged(pageSize : number){
        this.paging.pageSize = +pageSize;
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
        return this.paging.prevDisabled;
    }
    
    nextDisabled(){
        return this.paging.nextDisabled;
    }
    
    isSelected(id: number){
        return (this.allSelected && this.selectedIds.indexOf(id, 0) == -1)
        || (!this.allSelected && this.selectedIds.indexOf(id, 0) != -1);
    }
    
    isAllSelected(){
        return this.allSelected && this.selectedIds.length == 0;
    }
    
    updateDetails(){       
        this.pageDetails = this.paging.text + ' allSelected:' + this.allSelected + ' selectedIds:[' + this.selectedIds + ']';
    }
}

