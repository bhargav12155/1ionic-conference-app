import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { TabsPage } from "./tabs-page";
import { TabsPageRoutingModule } from "./tabs-page-routing.module";

import { ActivityLogModule } from "../activity-log/activity-log.module";
import { UsersPageModule } from "../users/users.module";

@NgModule({
  imports: [
    ActivityLogModule,
    UsersPageModule,
    CommonModule,
    IonicModule,
    TabsPageRoutingModule,
  ],
  declarations: [TabsPage],
})
export class TabsModule {}
