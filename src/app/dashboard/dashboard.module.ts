import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { CharacterComponent } from './view/character/character.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { MaterialModule } from '../modules/material/material.module';



@NgModule({
  declarations: [
    ListCharactersComponent,
    CharacterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], 
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
