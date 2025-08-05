import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { SpeakerDetailPage } from "./speaker-detail";
import { SpeakerDetailPageRoutingModule } from "./speaker-detail-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeakerDetailPageRoutingModule,
  ],
  declarations: [SpeakerDetailPage],
  exports: [SpeakerDetailPage],
})
export class SpeakerDetailModule {}
