import { PageRequest } from './pageRequest';
import { PageResponse } from './pageResponse';

export interface IGridSource{
    getPage(pageRequest : PageRequest) : PageResponse;
}