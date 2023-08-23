import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'}, /* ao tentar acessar rota que não existe ele direciona para home */
  {path:'home', component:HomeComponent},
  {path:'sobre', component:SobreComponent},
  {path: 'list', component:ListRenderComponent},
  {path: 'list/:id', component:ItemDetailComponent},
  {path: '**', redirectTo: 'home'}/* se for escrito qualquer nome aleatorio na url ele sera direcionado a home */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
