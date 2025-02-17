import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';

@NgModule({
  imports: [AppModule, ServerModule],  // Import AppModule for client-side routing and ServerModule for SSR
  providers: [provideServerRouting(serverRoutes)],  // Set up SSR routing
  bootstrap: [AppComponent],  // Bootstrap AppComponent
})
export class AppServerModule {}
