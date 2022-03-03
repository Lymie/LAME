import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyTestComponent } from './spotify-test/spotify-test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    SpotifyTestComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgbModule,

    StoreModule.forRoot({ count: counterReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
