import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import { signalSlice } from 'ngxtension/signal-slice';


interface State {
    products: Product[];
    status: 'loading' | 'success' | 'error' ;
}

@Injectable()
export class ProductsSateService {
    private initialState: State = {
        products: [],
        status: 'loading' as const,
    };
    

    state = signalSlice({
        initialState: this.initialState
    });
}