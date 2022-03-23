import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./core/auth/auth.guard";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoDetailComponent } from "./photos/photo-detail/photo-detail.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";

const routes: Routes = [
    // { 
    //     path: 'listphotos/:id', 
    //     component: PhotoListComponent, 
    //     resolve: {
    //         photos: PhotoListResolver
    //     }
    // },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule', // class name
        data: {
            title: 'HomePage'
        }
    },
    {
        path: 'listphotos',
        component: PhotoListComponent,
        resolve: {
            // making property 'photos' available outside
            photos: PhotoListResolver
        },
        data: {
            title: 'Timeline'
        }
    },
    {
        path: 'addphotos',
        component: PhotoFormComponent,
        // canActivate: [AuthGuard],
        data: {
            title: 'Add photo'
        }
    },
    {
        path: 'photodetail/:photoId',
        component: PhotoDetailComponent,
        data: {
            title: 'Detalhe da foto'
        }
    },
    {
        path: '**',
        component: NotFoundComponent,
        data: {
            title: 'Página Inexistente'
        }
    }
];

@NgModule({
    // imports: [RouterModule.forRoot(routes, { useHash: true })],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }