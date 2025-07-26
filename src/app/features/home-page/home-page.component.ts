import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { Tab3Component } from './components/tab3/tab3.component';

const MODULE_DEPENDENCIES: any = [MatTabsModule, RouterModule, MatSidenavModule];
const COMPONENT_DEPENDENCIES: any = [
  Tab1Component,
  Tab2Component,
  Tab3Component,
];

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

  selectedTabIndex = 0;

  tabs = [
    {label: 'Recent Discussions', path: ''},
    {label: 'Trending Discussions', path: 'tab2'},
    {label: 'Announced Discussions', path: 'tab3'},
  ];

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Set the initial selected index based on the current route
    this.selectedTabIndex = parseInt(this.activatedRoute.snapshot.queryParamMap.get('tab') || '0');
  }

  onTabChanged(idx: number) {
    this.selectedTabIndex = idx;
    if (this.selectedTabIndex < 1) {
      this.route.navigate(['home']);
    }
    else {
      this.route.navigate(['home'], {queryParams: {tab: this.selectedTabIndex}});
    }
  }

}
