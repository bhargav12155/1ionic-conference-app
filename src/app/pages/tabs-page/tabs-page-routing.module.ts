import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs-page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "users",
        loadChildren: () =>
          import("../users/users.module").then((m) => m.UsersPageModule),
      },
      {
        path: "map",
        loadChildren: () =>
          import("../map/map.module").then((m) => m.MapPageModule),
      },
      {
        path: "activity-log",
        loadChildren: () =>
          import("../activity-log/activity-log.module").then(
            (m) => m.ActivityLogModule
          ),
      },
      {
        path: "feedback",
        loadChildren: () =>
          import("../feedback/feedback.module").then(
            (m) => m.FeedbackPageModule
          ),
      },
      {
        path: "",
        redirectTo: "/app/tabs/map",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
