import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    // {path: '', redirectTo: '/zalo-pc', pathMatch: 'full'},
    {path: '', loadChildren: () => import('./body/body.module').then( x => x.BodyModule)},
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    ]
})
export class AppRoutingModule {}