import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CharacterComponent } from './view/character/character.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'character/:id',
        component: CharacterComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }