import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragonsComponent } from './components/dragons/dragons.component';
import { DragonComponent } from './components/dragon/dragon.component';
import { DragonSizePipe } from './pipes/dragon-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DragonsComponent,
    DragonComponent,
    DragonSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
