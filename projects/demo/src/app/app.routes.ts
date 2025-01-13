import { Routes } from '@angular/router';
import { OverviewComponent } from './modules/overview/overview.component';
import { ReadmeComponent } from './modules/readme/readme.component';

export const routes: Routes = [
    { path: '', component: OverviewComponent },
    { path: 'readme', component: ReadmeComponent },
    { path: '**', component: OverviewComponent }
];