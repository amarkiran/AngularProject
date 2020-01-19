import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule, MatSelectModule,
  MatTableModule, MatTabsModule
} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { UsersbasicInfoComponent } from './usersbasic-info/usersbasic-info.component';

const route: Routes = [
  {path: '', component: UsersComponent},
  {path: 'basicInfo', component: UsersbasicInfoComponent}
];


@NgModule({
  declarations: [UsersComponent, UsersbasicInfoComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTabsModule,
    RouterModule.forChild(route),
    FontAwesomeModule,
    MatIconModule
  ],
  exports: [MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  entryComponents: [UsersComponent]
})
export class UsersModule {
}
