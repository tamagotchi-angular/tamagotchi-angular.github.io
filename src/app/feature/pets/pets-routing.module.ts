import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { CreateComponent } from "./create/create.component";
import { PetDetailsComponent } from "./pet-details/pet-details.component";
import { PetsCatalogComponent } from "./pets-catalog/pets-catalog.component";

const routes: Routes = [
    {
        path: 'catalog',
        canActivate: [AuthGuard],
        component: PetsCatalogComponent,
    },
    {
        path:'catalog/:petId',
        canActivate: [AuthGuard],
        component: PetDetailsComponent
    },
    {
        path:'create',
        canActivate: [AuthGuard],
        component: CreateComponent
    }
]
export const PetsRoutingModule = RouterModule.forChild(routes);