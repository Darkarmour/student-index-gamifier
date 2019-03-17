import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatTableModule, MatButtonToggleModule, MatCardModule, MatButtonModule, MatIconModule, MatGridListModule, MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetupComponent } from './setup/setup.component';
import { SearchPipePipe } from './search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SetupComponent,
    SearchPipePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
