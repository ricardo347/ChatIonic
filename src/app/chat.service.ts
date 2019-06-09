import { Injectable } from '@angular/core';

@Injectable()
export class ChatService{
participante: string ="";

chats: any;
    constructor(){
        this.chats = [];
    }        

    addChat(chat){
        this.chats.push(chat);
    }
    setParticipante(nome){
        this.participante = nome;
    }
    
}