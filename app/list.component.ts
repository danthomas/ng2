import { Component, OnInit } from 'angular2/core';

import { GridComponent } from './shared/grid.component';
import { Column } from './shared/column';
import { IGridSource } from './shared/igridSource';

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
    getItems() : any[][]{
        return [
            [1, 'thomasd', 'asfas', 'dd'],
            [2, 'jonesg', 'asfas', 'dd'],
            [3, 'smithp', 'asfas', 'dd'],
            [4, 'browna', 'brown', 'al']
            ];
    }
}