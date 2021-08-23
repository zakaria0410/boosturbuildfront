import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';

import { ButtonModule } from 'primeng/button';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import {ListboxModule} from 'primeng/listbox';

import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import {DragDropModule} from 'primeng/dragdrop';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToolbarModule } from 'primeng/toolbar';
import {InplaceModule} from 'primeng/inplace';
import { TabViewModule } from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ChipsModule } from "primeng/chips";
import {CheckboxModule} from 'primeng/checkbox';
import { InputMaskModule } from "primeng/inputmask";
import {PanelModule} from 'primeng/panel';
import { CascadeSelectModule } from "primeng/cascadeselect";
import { PasswordModule } from "primeng/password";
import {FileUploadModule} from 'primeng/fileupload';
import {DataViewModule} from 'primeng/dataview';
import { HomeComponent } from './home/home.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { CentreinvistissementComponent } from './parametrage/centreinvistissement/centreinvistissement.component';
import {GMapModule} from 'primeng/gmap';
import { UserComponent } from './user/user.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CategorieroulantComponent } from './categorieengin/categorieroulant/categorieroulant.component';
import { CategorienroulantComponent } from './categorieengin/categorienroulant/categorienroulant.component';
import { EnginnrComponent } from './engin/enginnr/enginnr.component';
import { EnginrComponent } from './engin/enginr/enginr.component';
import { ParametragemmComponent } from './parametragemm/parametragemm.component';
import { PlanmaintenanceComponent } from './planmaintenance/planmaintenance.component';
import { PanneComponent } from './panne/panne.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopbarComponent,
    FooterComponent,
    HomeComponent,
    CentreinvistissementComponent,
    UserComponent,
    CategorieroulantComponent,
    CategorienroulantComponent,
    EnginnrComponent,
    EnginrComponent,
    ParametragemmComponent,
    PlanmaintenanceComponent,
    PanneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TooltipModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule,
    InputNumberModule,
    InplaceModule,
    DragDropModule,
    ListboxModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    CheckboxModule,
    InputMaskModule,
    FileUploadModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    DynamicDialogModule,
    DataViewModule,
PasswordModule,
SelectButtonModule,
PanelModule,
    CardModule,
    GMapModule,
    InputSwitchModule,

    ReactiveFormsModule,
    CommonModule,

    TableModule,

		SliderModule,
    DialogModule,
    ConfirmDialogModule,

		ContextMenuModule,


		ToastModule,


   
    ProgressBarModule,
 
    RadioButtonModule,
    ToolbarModule,
    FileUploadModule,
    TabViewModule,
    RatingModule,

    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:8080/api'],
          sendAccessToken: true
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
