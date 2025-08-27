import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DigitalFeedbackPage } from "./digital-feedback.page";

const routes: Routes = [
  {
    path: "",
    component: DigitalFeedbackPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalFeedbackPageRoutingModule {}
