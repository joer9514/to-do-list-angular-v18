import { Component } from '@angular/core';
import { WrapperContainerComponent } from '@ui/layouts/wrapper-container';
import { CardTaskListsComponent } from '@ui/pages/home/components/card-task-lists';

@Component({
  standalone: true,
  selector: 'home-page',
  imports: [WrapperContainerComponent, CardTaskListsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
