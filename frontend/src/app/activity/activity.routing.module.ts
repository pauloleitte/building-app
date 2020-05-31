import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
    {
        path: "",
        component: ListComponent
    },
    {
        path: "activity/:id",
        component: DetailComponent
    },
    {
      path: "activity/:action/:id",
      component: DetailComponent
    },
    {
        path: "activity",
        component: DetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActivityRoutingModule { }
