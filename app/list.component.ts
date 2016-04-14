import { Component, OnInit } from 'angular2/core';

import { GridComponent } from './shared/grid.component';
import { Column } from './shared/column';

@Component({
    template: '<grid [items]="items" [columns]="columns"></grid>',
    directives : [GridComponent],
})
export class ListComponent implements OnInit {
    items : any[][] = [
            [1, 'thomasd', 'asfas', 'dd'],
            [2, 'jonesg', 'asfas', 'dd'],
            [3, 'smithp', 'asfas', 'dd']
            ];
            
    columns : Column[] = [
        new Column("User NameX"), 
        new Column("First NameX"), 
        new Column("Last NameX")]
    
    ngOnInit(){
        
    }
}