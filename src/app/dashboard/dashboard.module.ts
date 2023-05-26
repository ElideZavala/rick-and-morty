import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { CharacterComponent } from './view/character/character.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { MaterialModule } from '../modules/material/material.module';
import { CreatedDatePipe } from '../../pipes/created-date.pipe';
import { DashboardRoutingModule } from './dashboard.routing';



@NgModule({
  declarations: [
    ListCharactersComponent,
    CharacterComponent,
    DashboardComponent,
    CreatedDatePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule
  ], 
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
