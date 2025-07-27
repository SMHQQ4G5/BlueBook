import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

const MODULE_DEPENDENCIES: any = [
  MatToolbarModule, 
  RouterModule,
  MatSidenavModule,
  MatTabsModule,
  MatCardModule,
  MatListModule
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
  tabs = [
    { label: 'Home Page', path: '/home' },
    { label: 'Discussions', path: '/user' },
    { label: 'Categories', path: '/home' },
    { label: 'Support', path: '/home' }
  ];


  ngOnInit() {
    // Set the initial selected index based on the current route
  }
}
