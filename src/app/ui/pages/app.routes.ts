import { Routes } from '@angular/router';

const HomePage = async () =>
  await import('@ui/pages/home/home.routes').then((p) => p.routes);

export const routes: Routes = [
  { path: '', loadChildren: HomePage, title: 'Home | To Do List' },
];
