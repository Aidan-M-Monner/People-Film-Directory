// The essentials
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Needed Imports
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

// App Imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// People Table Imports
import { PeopleComponent } from './people-table/people-table.component';
import { UserViewComponent } from './people-table/user-view/user-view.component';

// Film Table Imports
import { FilmComponent } from './film-table/film-table.component';
import { FilmViewComponent } from './film-table/film-view/film-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    UserViewComponent,
    FilmComponent,
    FilmViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
