import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {NavbarComponent} from '../shared/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' },
      { path: '**', redirectTo: 'not-found' }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    FontAwesomeModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
