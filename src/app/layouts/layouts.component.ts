import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';


const MODULE_DEPENDENCIES: any = [
  MatToolbarModule, 
  MatTabsModule, 
  RouterModule,
  MatSidenavModule
];
const COMPONENT_DEPENDENCIES: any = [
];

@Component({
  selector: 'app-layouts',
  imports: [
    ...MODULE_DEPENDENCIES,
    ...COMPONENT_DEPENDENCIES
  ],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {
}
