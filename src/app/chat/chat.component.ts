import {Component, OnInit} from '@angular/core';
import {ChatService} from "../service/ChatService";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: string[] = [];
  content: string = '';

  constructor(private chatService: ChatService) {}

  sendMessage() {
    this.chatService.sendMessage(this.content);
    this.messages.push(this.content);
    this.content = '';
    // if (this.content && this.chatService.stompClient.connected) {
      // this.chatService.stompClient.send("/app/chat", {}, JSON.stringify({ message: this.content }));
      // this.content = "";
    // }
  }

  ngOnInit(): void {
    this.chatService.openWebSocket();
  }
}
