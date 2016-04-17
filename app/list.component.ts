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
                [1, '1thomasd', 'asfas', 'dd'],
                [2, '2jonesg', 'asfas', 'dd'],
                [3, '3smithp', 'asfas', 'dd'],
                [4, '4browna', 'brown', 'al'],
                [5, '5browna', 'brown', 'al'],
                [6, '6sfasdf', 'asfas', 'dd'],
                [7, '7jgha;g', 'asfas', 'dd'],
                [8, '8ywtqyw', 'asfas', 'dd'],
                [9, '9vjzx,c', 'brown', 'al'],
                [10, '10hgakd', 'brown', 'al'],
                [11, '11jonesg', 'asfas', 'dd'],
                [12, '12jonesg', 'asfas', 'dd'],
                [13, '13jonesg', 'asfas', 'dd'],
                [14, '14jonesg', 'asfas', 'dd'],
                [15, '15jonesg', 'asfas', 'dd'],
                [16, '16smithp', 'asfas', 'dd'],
                [17, '17browna', 'brown', 'al'],
                [18, '18browna', 'brown', 'al'],
                [19, '19sfasdf', 'asfas', 'dd'],
                [20, '20jgha;g', 'asfas', 'dd'],
                [21, '21ywtqyw', 'asfas', 'dd'],
                [22, '2jonesg', 'asfas', 'dd'],
                [23, '3smithp', 'asfas', 'dd'],
                [24, '4browna', 'brown', 'al'],
                [25, '5browna', 'brown', 'al'],
                [26, '6sfasdf', 'asfas', 'dd'],
                [27, '7jgha;g', 'asfas', 'dd'],
                [28, '8ywtqyw', 'asfas', 'dd'],
                [29, '9vjzx,c', 'brown', 'al'],
                [30, '10hgakd', 'brown', 'al'],
                [31, '11jonesg', 'asfas', 'dd'],
                [32, '12jonesg', 'asfas', 'dd'],
                [33, '13jonesg', 'asfas', 'dd'],
                [34, '14jonesg', 'asfas', 'dd'],
                [35, '15jonesg', 'asfas', 'dd'],
                [36, '16smithp', 'asfas', 'dd'],
                [37, '17browna', 'brown', 'al'],
                [38, '18browna', 'brown', 'al'],
                [39, '19sfasdf', 'asfas', 'dd'],
                [40, '20jgha;g', 'asfas', 'dd'],
                [41, '21ywtqyw', 'asfas', 'dd']
                ];
        
    
    getPage(paging: Paging) : Page{
        console.log('getting data');
        let totalCount : number = this.items.length;
        let pageIndex : number = paging.pageIndex;
        let startIndex : number = paging.pageIndex * paging.pageSize;
        
        if(paging.pageIndex * paging.pageSize > totalCount){
            pageIndex = Math.floor(totalCount / paging.pageSize);
            startIndex = pageIndex * paging.pageSize;
        }        
        
        let endIndex : number = startIndex + paging.pageSize;
        console.log(startIndex);
        console.log(endIndex);
        
        return new Page(this.items.slice(startIndex, endIndex), 
        pageIndex,
        totalCount,
        [5, 10, 25, 50, 100]);
    }
}