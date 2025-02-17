import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomepageComponent,
    FooterComponent,
    ArticleComponent,
    MenuComponent,
    AboutComponent,
    LoginComponent,
    P404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    provideHttpClient(),

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements
  bootstrap: [AppComponent]
})
export class AppModule { }
