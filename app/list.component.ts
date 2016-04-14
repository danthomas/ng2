import { Component, OnInit } from 'angular2/core';

import { GridComponent } from './shared/grid.component';
import { Column } from './shared/column';
import { IGridSource } from './shared/igridSource';
import { Page } from './shared/page';

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
    getPage(pageIndex: number) : Page{
        
        var page = new Page();
        
        page.totalItems = 10;
        
        if (pageIndex == 0)
        {
            page.items = [
                [1, 'thomasd', 'asfas', 'dd'],
                [2, 'jonesg', 'asfas', 'dd'],
                [3, 'smithp', 'asfas', 'dd'],
                [4, 'browna', 'brown', 'al'],
                [5, 'browna', 'brown', 'al']
                ];
        } else if (pageIndex == 1)
        {
            page.items = [
                [6, 'sfasdf', 'asfas', 'dd'],
                [7, 'jgha;g', 'asfas', 'dd'],
                [8, 'ywtqyw', 'asfas', 'dd'],
                [9, ',vjzx,c', 'brown', 'al'],
                [10, 'hgakd', 'brown', 'al']
                ];
        }
        
        return page;
    }
}