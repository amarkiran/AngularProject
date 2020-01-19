import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {AppComponent} from './app.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeModule} from './home/home.module';
import {RouterModule, Routes} from '@angular/router';
import {App} from "./app.config";

const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatExpansionModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    HomeModule,
  ],
  providers: [
    App,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: App) => () => config.load(),
      deps: [App],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
