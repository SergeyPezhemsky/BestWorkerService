import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from './entities/components/user-component/user-component.component';
import {FormsModule} from '@angular/forms';
import {DxSelectBoxModule} from 'devextreme-angular';



@NgModule({
  declarations: [UserComponentComponent],
  exports: [
    UserComponentComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        DxSelectBoxModule
    ]
})
export class BestWorkerServiceModuleModule { }
