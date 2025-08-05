import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { checkTutorialGuard } from "./providers/check-tutorial.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/app/tabs/map",
    pathMatch: "full",
  },
  {
    path: "app",
    loadChildren: () =>
      import("./pages/tabs-page/tabs-page.module").then((m) => m.TabsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
