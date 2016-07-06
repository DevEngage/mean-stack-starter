import { Component, OnInit } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css'],
  viewProviders: [HTTP_PROVIDERS],
})
export class ChatComponent implements OnInit {
  chat: any;
  constructor(http: Http) {
    http.get('http://localhost:3000/api/chat')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(chat => this.chat = chat);
  }

  ngOnInit() {
  }

}
