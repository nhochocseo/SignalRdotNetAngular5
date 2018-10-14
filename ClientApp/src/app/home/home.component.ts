import { Component,OnInit } from '@angular/core';
import {HubConnection, HubConnectionBuilder} from '@aspnet/signalr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public message:string="";
  public messages:string[]=[];
  public hubConection: HubConnection;
  ngOnInit() {
    this.hubConection = new HubConnectionBuilder().withUrl("echo").build();
    this.hubConection.on("Send",(msg) => {
      this.messages.push(msg);
    });
    this.hubConection.start() .then(() => {
      console.log("Connect Start");
    }).catch(err=>{
      console.error(err);
    });
  }
  echo() {
    this.hubConection.invoke("Echo",this.message);
  }
}
