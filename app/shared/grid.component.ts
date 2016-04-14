import { Component, Input, Output, OnChanges, SimpleChange, EventEmitter } from 'angular2/core';
import { Column } from './column';

@Component({
    templateUrl: 'app/shared/grid.component.html',
    selector: 'grid'
})
export class GridComponent implements OnChanges{
    @Input() items : string;
    @Input() columns : Column[];
    @Output() getPage: EventEmitter<number> = new EventEmitter<number>();
         
    logDetails : string;
    allSelected : boolean = false;
    selectedIds : number[] = [];
    totalItems : number = 0;
    
    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        this.totalItems = changes['items'].currentValue.length;
        this.log();
    }
        
    onSelectItem(id){
        if (this.selectedIds.indexOf(id, 0) >= 0){
            var index = this.selectedIds.indexOf(id, 0);
            this.selectedIds.splice(index, 1);     
        } else{
            this.selectedIds.push(id);
        }        
        
        if (this.totalItems == this.selectedIds.length){
                this.selectedIds = [];
                this.allSelected = !this.allSelected;   
        } 
        
        this.log();
    }
        
    onSelectAll(){
        this.allSelected = !this.allSelected;
        this.selectedIds = [];
        this.log();
    }
    
    onPrev(){
        
    }
    
    onNext(){
        
    }
    
    isSelected(id){
        return this.allSelected || this.selectedIds.indexOf(id, 0) >= 0;
    }
    
    isAllSelected(){
        return this.allSelected && this.selectedIds.length == 0;
    }
    
    log(){       
        this.logDetails = 'totalItems:' + this.totalItems + ' allSelected:' + this.allSelected + ' selectedIds:[' + this.selectedIds + ']';
    }
}