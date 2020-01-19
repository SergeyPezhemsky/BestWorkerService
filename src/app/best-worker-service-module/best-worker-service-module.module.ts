import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from './entities/components/user-component/user-component.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [UserComponentComponent],
  exports: [
    UserComponentComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class BestWorkerServiceModuleModule { }
