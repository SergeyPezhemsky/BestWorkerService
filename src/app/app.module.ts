import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BestWorkerServiceModuleModule} from './best-worker-service-module/best-worker-service-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BestWorkerServiceModuleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
