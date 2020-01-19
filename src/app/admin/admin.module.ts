import {NgModule, APP_INITIALIZER} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
} from '@angular/material';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full' },
      {path: 'users', loadChildren: './users/users.module#UsersModule'}
    ]
  }
];

@NgModule({
  declarations: [AdminComponent],
  imports: [MatTabsModule,
    MatTableModule,
    CommonModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    MatTabsModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})

export class AdminModule {
}
