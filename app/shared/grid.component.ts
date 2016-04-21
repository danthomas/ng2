import { Component, Input, Output, OnChanges, SimpleChange, EventEmitter } from 'angular2/core';
import { Column } from './column';
import { IGridSource } from './igridSource';
import { PageResponse } from './pageResponse';
import { PageDetails } from './pageDetails';
import { PageRequest } from './pageRequest';
import { Paging } from './paging.component';


@Component({
    templateUrl: 'app/shared/grid.component.html',
    selector: 'grid',
    directives : [Paging],
})
export class GridComponent implements OnChanges{
    @Input() gridSource : IGridSource
    @Input() columns : Column[];
    @Output() getPage: EventEmitter<number> = new EventEmitter<number>();

    pageDetails : PageDetails;

    constructor(){
        this.pageDetails = new PageDetails(0, 10);
    }

    onPagingChanged(){
        this.getItems();
    }

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        this.getItems();
    }

    getItems(){
        this.pageDetails.update(this.gridSource.getPage(new PageRequest(this.pageDetails.pageIndex, this.pageDetails.pageSize)));
    }

    onSelectItem(id : number){
        this.pageDetails.selectItem(id);
    }

    onSelectAll(){
        this.pageDetails.selectAll();
    }

    isSelected(id: number){
        return (this.pageDetails.allSelected && this.pageDetails.selectedIds.indexOf(id, 0) == -1)
        || (!this.pageDetails.allSelected && this.pageDetails.selectedIds.indexOf(id, 0) != -1);
    }

    isAllSelected(){
        return this.pageDetails.allSelected && this.pageDetails.selectedIds.length == 0;
    }
}