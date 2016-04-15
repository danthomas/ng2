import {Page} from './page';
import {Paging} from './paging';

export interface IGridSource{
    getPage(paging: Paging) : Page;
}