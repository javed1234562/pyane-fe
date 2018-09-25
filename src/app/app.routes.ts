import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full', },
    { path: '', loadChildren: './users/users.module#UsersModule' },

]