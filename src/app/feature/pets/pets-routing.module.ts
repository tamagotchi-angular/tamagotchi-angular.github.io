import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { PetsCatalogComponent } from "./pets-catalog/pets-catalog.component";

const routes: Routes = [
    {
        path: 'catalog',
        component: PetsCatalogComponent,
    },
    {
        path:'create',
        component: CreateComponent
    }
]
export const PetsRoutingModule = RouterModule.forChild([]);