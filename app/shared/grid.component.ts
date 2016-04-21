import { Component, Input, Output, OnChanges, SimpleChange, EventEmitter } from 'angular2/core';
import { Column } from './column';
import { IGridSource } from './igridSource';
import { Page} from './page';
import { PageDetails } from './pageDetails';
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

    page : Page;
    pageDetails : PageDetails;
    selectedIds : number[] = [];

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
        this.page = this.gridSource.getPage(this.pageDetails);
        this.pageDetails.update(this.page);
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
                this.pageDetails.allSelected = !this.pageDetails.allSelected;
        }
    }

    onSelectAll(){
        if (this.pageDetails.allSelected && this.selectedIds.length > 0){
            this.pageDetails.allSelected = true;
        } else{
            this.pageDetails.allSelected = !this.pageDetails.allSelected;
        }

        this.selectedIds = [];
    }

    onPageSizeChanged(pageSize : number){
        this.pageDetails.pageSize = +pageSize;
    }

    isSelected(id: number){
        return (this.pageDetails.allSelected && this.selectedIds.indexOf(id, 0) == -1)
        || (!this.pageDetails.allSelected && this.selectedIds.indexOf(id, 0) != -1);
    }

    isAllSelected(){
        return this.pageDetails.allSelected && this.selectedIds.length == 0;
    }
}