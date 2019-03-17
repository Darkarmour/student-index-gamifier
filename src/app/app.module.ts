import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatTableModule, MatButtonToggleModule, MatCardModule, MatButtonModule, MatIconModule, MatGridListModule, MatInputModule, MatDialogModule, MatTabsModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetupComponent } from './setup/setup.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { AddIndexComponent } from './add-index/add-index.component';
import { MapToIterablePipe } from './map-to-iterable.pipe';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SetupComponent,
    SearchPipePipe,
    AddIndexComponent,
    MapToIterablePipe,
    ModalComponent
  ],
  entryComponents: [
    AddIndexComponent,
    ModalComponent
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
    MatInputModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
