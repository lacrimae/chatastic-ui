import {Injectable} from "@angular/core";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Socket} from "net";


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly URL = 'http://localhost:8081/ws';
  topic: string = "/topic/greetings";
  stompClient: any;

  constructor() {
  }

  public openWebSocket() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.URL);
    this.stompClient = Stomp.over(ws);

    const _this = this;
    _this.stompClient.connect({}, function (frame: any) {
      _this.stompClient.subscribe(_this.topic, function (sdkEvent: any) {
        _this.onMessageReceived(sdkEvent);
      });
    }, this.errorCallBack);

  }

  onMessageReceived(message: any) {
    console.log("Message Received from Server: " + message.body);
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error: string) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this.openWebSocket();
    }, 5000);
  }

  public sendMessage(message: string) {
    // const jsonMessage = message;
    this.stompClient.send('/app/hello', {}, JSON.stringify(message));
  }
}
