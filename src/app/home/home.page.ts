import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ChatService } from '../chat.service';
import { ToastController } from '@ionic/angular';
//import { ChatService } from '../chat.service';



@Component({ 
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ChatService] 
 
})  

export class HomePage {
  chatService;
  nome:String = "";
  assunto: String ="";

  constructor(private router:Router, chService: ChatService,private toastController: ToastController ) {    
    this.chatService = chService;        
  }

  //responsavel por pegar o valor atual selecionado da sala
  onChange(selectedValue){
    this.assunto = selectedValue;
  }

  onClickEntrar(){
    this.chatService.setParticipante(this.nome);
    
    //validação de campos de nome e seleção de sala vazios
    if(this.assunto || this.nome){
    
      //se não é a primeira mensagem, o chat não deve mandar boas vindas novamente
      if(this.chatService.chats.length == 0)
        this.chatService.addChat(
          {
            message:this.nome +", Bem vindo ao Chat sobre "+this.assunto,
            sender:"Chat diz:",
            data:Date.now()
          }) ;      
      
    //controle da navegação de telas, diferente no ionic4
      let navigationExtras: NavigationExtras = {
        state: {chService: this.chatService}
      };      
      this.router.navigate(['chat'], navigationExtras);
      
    }else{
      console.log("Erro", "Selecione uma categoria de Chat")
      let toast = this.toastController.create({
        message: 'Toast Message',
        duration: 3000
      }).then((toastData)=>{toastData.present()});     
    }
  }
  

}
