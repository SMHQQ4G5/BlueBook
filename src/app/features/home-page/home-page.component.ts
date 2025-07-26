import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { Tab3Component } from './components/tab3/tab3.component';

const MODULE_DEPENDENCIES: any = [MatTabsModule, RouterModule, MatSidenavModule, CommonModule];
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

  selectedTabIndex = 0;
  selectedTab: any = null;
  tabs =  [
    { label: 'Recent Discussions', component: Tab1Component },
    { label: 'Trending Discussions', component: Tab2Component },
    { label: 'Announced Discussions', component: Tab3Component },
  ];

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Set the initial selected index based on the current route
    this.selectedTabIndex = parseInt(this.activatedRoute.snapshot.queryParamMap.get('tab') || '0');
    this.selectedTab = (this.tabs[this.selectedTabIndex] || this.tabs[0]).component;
  }

  onTabChanged(idx: number) {
    this.selectedTabIndex = idx;
    if (this.selectedTabIndex < 1) {
      this.selectedTab = this.tabs[0].component;
      this.route.navigate(['home']);
    }
    else {
      this.selectedTab = (this.tabs[this.selectedTabIndex] || this.tabs[0]).component;
      this.route.navigate(['home'], {queryParams: {tab: this.selectedTabIndex}});
    }
  }

}
