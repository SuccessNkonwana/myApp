import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
                        // {path:"home", component: HomeComponent},
                        // {path:"about", component: AboutComponent},
                        // {path:"contact", component: ContactComponent},
                        {path:"", component: MenuComponent, children:[
                                  {path:"", component: HomeComponent},
                                  {path:"about", component: AboutComponent},
                                  {path:"contact", component: ContactComponent},
                                  {path:"feedback", component: FeedbackComponent}
                                
                                ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
