import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InputComponent } from './pages/input/input.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialsComponent } from './pages/materials/materials.component';
import { TestsComponent } from './pages/tests/tests.component';
import { SharedThingTestComponent } from './pages/shared-thing-test/shared-thing-test.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:'material',
        pathMatch:'full'
    },
    {
        path:"home",
        component:HomeComponent,
    },
    {
        path:"material",
        component:MaterialsComponent,
    },
    {
        path:"tests",
        component:TestsComponent,
    },
    {
        path:"common",
        component:SharedThingTestComponent,
    },
];
