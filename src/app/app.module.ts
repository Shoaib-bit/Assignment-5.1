import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch : 'full',
        redirectTo : 'form'
      },
      {
        path: 'form',
        component : FormComponent
      },
      {
        path: 'table',
        component : TableComponent
      }
    ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
