import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {
  chatService: any;
  participante: string = "";
  message: string = "";
  
  constructor(private route: ActivatedRoute, private router: Router ) { 

    //recuperação da passagem de parametros da navegação
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) 
        this.chatService = this.router.getCurrentNavigation().extras.state.chService;
    });    
  }
    
  ngOnInit() {
   
  }
  
  onClickEnviar(){
    if(this.message != ""){
      let chat = {
        message : this.message,
        sender :this.chatService.participante +" diz:",
        data: Date.now()    
      }
      this.message = "";
      this.chatService.addChat(chat); 
    }
    
  }

}
