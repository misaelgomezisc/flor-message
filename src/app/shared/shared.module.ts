import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlorComponent } from './components/flor/flor.component';
import { MessageComponent } from './components/message/message.component';



@NgModule({
  declarations: [
    FlorComponent,
    MessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlorComponent,
    MessageComponent
  ]
})
export class SharedModule { }
