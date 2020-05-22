import { ShoppingModule } from './modules/shopping/shopping.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, RecipesModule, ShoppingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
