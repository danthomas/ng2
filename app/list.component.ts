import { Component, OnInit } from 'angular2/core';

import { GridComponent } from './shared/grid.component';
import { Column } from './shared/column';
import { IGridSource } from './shared/igridSource';
import { Page } from './shared/page';
import { Paging } from './shared/paging';

@Component({
    template: '<grid [columns]="columns" [gridSource]="gridSource"></grid>',
    directives : [GridComponent],
})
export class ListComponent implements OnInit {
    
    gridSource : IGridSource = new TestGrid();
    
    columns : Column[] = [
        new Column("User NameX"), 
        new Column("First NameX"), 
        new Column("Last NameX")]
    
    ngOnInit(){
        
    }
}
export class TestGrid implements IGridSource{
    
    items = [
                [1, 'thomasd', 'asfas', 'dd'],
                [2, 'jonesg', 'asfas', 'dd'],
                [3, 'smithp', 'asfas', 'dd'],
                [4, 'browna', 'brown', 'al'],
                [5, 'browna', 'brown', 'al'],
                [6, 'sfasdf', 'asfas', 'dd'],
                [7, 'jgha;g', 'asfas', 'dd'],
                [8, 'ywtqyw', 'asfas', 'dd'],
                [9, ',vjzx,c', 'brown', 'al'],
                [10, 'hgakd', 'brown', 'al'],
                [11, 'jonesg', 'asfas', 'dd'],
                [12, 'jonesg', 'asfas', 'dd'],
                [13, 'jonesg', 'asfas', 'dd'],
                [14, 'jonesg', 'asfas', 'dd'],
                [15, 'jonesg', 'asfas', 'dd'],
                [16, 'smithp', 'asfas', 'dd'],
                [17, 'browna', 'brown', 'al'],
                [18, 'browna', 'brown', 'al'],
                [19, 'sfasdf', 'asfas', 'dd'],
                [20, 'jgha;g', 'asfas', 'dd'],
                [21, 'ywtqyw', 'asfas', 'dd']
                ];
        
    
    getPage(paging: Paging) : Page{
        
        var page = new Page();
        
        page.totalItems = this.items.length;
       
       console.log(paging);
       
        page.items =  this.items.slice(paging.pageIndex * paging.pageSize, (paging.pageIndex + 1) * paging.pageSize);
        
        return page;
    }
}