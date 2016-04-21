import {Page, PageDetails} from './page';

export interface IGridSource{
    getPage(pageDetails: PageDetails) : Page;
}