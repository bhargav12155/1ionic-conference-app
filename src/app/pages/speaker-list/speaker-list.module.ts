import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { SpeakerListPage } from "./speaker-list";
import { SpeakerListPageRoutingModule } from "./speaker-list-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeakerListPageRoutingModule,
  ],
  declarations: [SpeakerListPage],
  exports: [SpeakerListPage],
})
export class SpeakerListModule {}
