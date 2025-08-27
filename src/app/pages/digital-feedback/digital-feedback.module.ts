import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { DigitalFeedbackPageRoutingModule } from "./digital-feedback-routing.module";
import { DigitalFeedbackPage } from "./digital-feedback.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalFeedbackPageRoutingModule,
  ],
  declarations: [DigitalFeedbackPage],
})
export class DigitalFeedbackPageModule {}
