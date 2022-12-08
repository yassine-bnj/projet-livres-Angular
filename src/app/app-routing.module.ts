import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { LivreGuard } from './livre.guard';
import { LivresComponent } from './livres/livres.component';
import { LoginComponent } from './login/login.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';

const routes: Routes = [
  { path: "livres", component: LivresComponent },
  { path: "add-livre", component: AddLivreComponent , canActivate:[LivreGuard]},
  { path: "", redirectTo: "livres", pathMatch: "full" },
  { path: "updateLivre/:id", component: UpdateLivreComponent, canActivate:[LivreGuard] },
  {path: "rechercheParType", component : RechercheParTypeComponent},
  {path: "rechercheParTitre", component : RechercheParTitreComponent},
  {path: "listeTypes", component : ListeTypesComponent,canActivate:[LivreGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
