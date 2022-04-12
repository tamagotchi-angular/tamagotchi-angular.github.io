import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { CreateComponent } from "./create/create.component";
import { PetsCatalogComponent } from "./pets-catalog/pets-catalog.component";

const routes: Routes = [
    {
        path: 'catalog',
        canActivate: [AuthGuard],
        component: PetsCatalogComponent,
    },
    {
        path:'create',
        canActivate: [AuthGuard],
        component: CreateComponent
    }
]
export const PetsRoutingModule = RouterModule.forChild([]);