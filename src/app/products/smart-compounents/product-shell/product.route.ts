import { Routes } from "@angular/router";

export default [
    {
        path:'products', loadComponent:() => import('../product-list/product-list.component')
    },
]as Routes;
