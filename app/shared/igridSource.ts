import { PageData } from './pageData';
import { PageDetails} from './pageDetails';

export interface IGridSource{
    getPage(pageDetails: PageDetails) : PageData;
}