import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { UserSettingsPageComponent } from '@bluebook/features/user-settings-page/user-settings-page.component';
import { HomePageComponent } from '@bluebook/features/home-page/home-page.component';

export const routes: Routes = [
    {
        component: LayoutsComponent,
        path: '',
        children: [
            {
                path: 'home',
                component: HomePageComponent
            },
            {
                path: 'user',
                component: UserSettingsPageComponent
            },
            {
                path: '**',
                redirectTo: 'home'
            },
        ]
    }
];
