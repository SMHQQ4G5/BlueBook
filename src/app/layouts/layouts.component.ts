import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabLink, MatTabNav, MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';


const MODULE_DEPENDENCIES: any = [
  MatToolbarModule, 
  RouterModule,
  MatSidenavModule,
  MatTabsModule,
];
const COMPONENT_DEPENDENCIES: any = [];

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
