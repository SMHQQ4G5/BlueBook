import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

const MODULE_DEPENDENCIES: any = [MatTabsModule, RouterModule, MatSidenavModule];
const COMPONENT_DEPENDENCIES: any = [];

@Component({
  selector: 'app-home-page',
  imports: [
    ...MODULE_DEPENDENCIES,
    ...COMPONENT_DEPENDENCIES
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(private router: Router) {}

  selectedIndex = 0;
  tabs = [
    {label: 'Recent Discussions', path: '/home'},
    {label: 'Trending Discussions', path: '/user'},
    {label: 'Announced Discussions', path: '/home/tab3'},
  ];

  onTabChange(index: number) {
    this.selectedIndex = index;
    this.router.navigate([this.tabs[index].path]);
  }

}
