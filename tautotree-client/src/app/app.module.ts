import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CapturePhotoComponent } from './home/new-tautotree/capture-photo/capture-photo.component';
import { ViewPhotoComponent } from './home/new-tautotree/view-photo/view-photo.component';
import { ReviewDetailsComponent } from './home/new-tautotree/review-details/review-details.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { TreesListComponent } from './home/my-trees/trees-list/trees-list.component';
import { TreesMapComponent } from './home/my-trees/trees-map/trees-map.component';
import { MyTreesComponent } from './home/my-trees/my-trees.component';
import { MapComponent } from './map/map.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CapturePhotoComponent,
    ViewPhotoComponent,
    ReviewDetailsComponent,
    TreesListComponent,
    TreesMapComponent,
    MyTreesComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzIconModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzAvatarModule,
    NzTabsModule,
    NzRadioModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
