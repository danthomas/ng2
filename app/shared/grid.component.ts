import { Component, Input, OnChanges, SimpleChange } from 'angular2/core';
import { Column } from './column';

@Component({
    templateUrl: 'app/shared/grid.component.html',
    selector: 'grid'
})
export class GridComponent implements OnChanges{
    @Input() items : string;
    @Input() columns : Column[];
    
    allSelected : boolean = false;
    selectedIds : number[] = [];
    totalItems : number = 0;
    
    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        this.totalItems = changes['items'].currentValue.length;
    }
        
    onSelectItem(id){
        if (this.selectedIds.indexOf(id, 0) >= 0){
            var index = this.selectedIds.indexOf(id, 0);            
            this.selectedIds.splice(index, 1);     
        } else{
            this.selectedIds.push(id);
        }        
        
        if (this.totalItems == this.selectedIds.length){
            if (!this.allSelected){
                this.selectedIds = [];
            }
              
            this.allSelected = true;   
        } else {
            this.allSelected = false;
        }
    }
        
    onSelectAll(){
        this.allSelected = !this.allSelected;
    }
    
    isSelected(id){
        return this.allSelected || this.selectedIds.indexOf(id, 0) >= 0;
    }
}