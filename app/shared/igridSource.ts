import {Page} from './page';

export interface IGridSource{
    getPage(pageIndex: number) : Page;
}