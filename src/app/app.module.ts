import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainService } from './main.service';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionsComponent } from './questions/questions.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MarcoComponent } from './marco/marco.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionsComponent,
    NotfoundComponent,
    MarcoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
