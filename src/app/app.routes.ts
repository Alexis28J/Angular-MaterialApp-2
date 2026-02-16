import { Routes } from '@angular/router';
import { Page1 } from './components/page1/page1';
import { Page2 } from './components/page2/page2';
import { Page3 } from './components/page3/page3';

export const routes: Routes = [
    { path:'', redirectTo: '/home', pathMatch: 'full' },
    { path: 'page1', component: Page1},
    { path: 'page2', component: Page2},
    { path: 'page3', component: Page3},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];
