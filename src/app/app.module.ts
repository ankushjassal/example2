import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import {ProductComponent} from './Product/product.component';
import {NotFound} from './NotFound/NotFound.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
//import {ValidateForms} from './Employee/validate-fields-submit-form.component';

const appRoutes: Routes=[
	{path: 'Employee', component: EmployeeComponent},
	{path: 'Product', component: ProductComponent},
	{path: '**', component: NotFound},	
];

@NgModule({
  imports:      [ HttpModule, BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, EmployeeComponent, ProductComponent, NotFound ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
