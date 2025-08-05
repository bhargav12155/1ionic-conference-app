import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ActivityLogPage } from "./activity-log.page";
import { ActivityLogPageRoutingModule } from "./activity-log-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityLogPageRoutingModule,
  ],
  declarations: [ActivityLogPage],
})
export class ActivityLogModule {}
