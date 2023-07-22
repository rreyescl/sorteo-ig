import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SorteoComponent } from './components/sorteo/sorteo.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list'; // Importa MatGridListModule desde @angular/material
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [
  {path:'sorteo', component: SorteoComponent},
  
];

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled',
  onSameUrlNavigation: 'reload'
}

@NgModule({
  declarations: [
    AppComponent,
    SorteoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, routerOptions),
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatGridListModule,
    ScrollingModule,
    MatPaginatorModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
