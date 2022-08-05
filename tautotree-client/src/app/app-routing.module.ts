import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTreesComponent } from './home/my-trees/my-trees.component';
import { TreesListComponent } from './home/my-trees/trees-list/trees-list.component';
import { TreesMapComponent } from './home/my-trees/trees-map/trees-map.component';
import { CapturePhotoComponent } from './home/new-tautotree/capture-photo/capture-photo.component';
import { NewTautotreeComponent } from './home/new-tautotree/new-tautotree.component';
import { ReviewDetailsComponent } from './home/new-tautotree/review-details/review-details.component';
import { ViewPhotoComponent } from './home/new-tautotree/view-photo/view-photo.component';
import { MapComponent } from './map/map.component';
import { TreeDetailComponent } from './tree-detail/tree-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', children: [
    {path: '', redirectTo: 'my-trees', pathMatch: 'full'},
    {path: 'my-trees', component: MyTreesComponent, children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {
        path: 'list', 
        component: TreesListComponent,
      },
      {
        path: 'list/:id',
        component: TreeDetailComponent
      },
      {path: 'map', component: MapComponent},
    ]},
    {path: 'new-tautotree', component: NewTautotreeComponent, children: [
      {path: '', redirectTo: 'capture-photo', pathMatch: 'full'},
      {path: 'capture-photo', component: CapturePhotoComponent},
      {path: 'view-photo', component: ViewPhotoComponent},
      {path: 'review-details', component: ReviewDetailsComponent}
    ]}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
