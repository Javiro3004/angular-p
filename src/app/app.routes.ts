import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren : () => import('.//products/smart-compounents/product-shell/product.route'),
    },

    {
        path:'**',
        redirectTo: '',
    },
];
