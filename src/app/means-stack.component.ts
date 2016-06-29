import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'means-stack-app',
  templateUrl: 'means-stack.component.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['means-stack.component.css']
})
export class MeansStackAppComponent {
  title = 'Means Stack Starter Repo';
}
