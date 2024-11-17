import { Routes } from '@angular/router';
import { Respuesta1Component } from './respuesta1/respuesta1.component';
import { Respuesta2Component } from './respuesta2/respuesta2.component';
import { Respuesta3Component } from './respuesta3/respuesta3.component';
import { Respuesta4Component } from './respuesta4/respuesta4.component';

export const routes: Routes = [
    {path: "respuesta1", component: Respuesta1Component},
    {path: "respuesta2", component: Respuesta2Component},
    {path: "respuesta3", component: Respuesta3Component},
    {path: "respuesta4", component: Respuesta4Component}
];
