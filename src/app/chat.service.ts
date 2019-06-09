import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from '@angular/core';

@Injectable()
export class ChatService{
participante: string ="";
chats: any;
   
    constructor(private db: AngularFireDatabase){
        this.chats = [];
    }        
   
//adiciona no banco um chat
addChat(chat){
    this.chats.push(chat);
        this.db.list("/chats/").push({
            mensagem: chat.mensagem,
            sender: chat.sender,
            data: chat.data
        });
    }
//recupera todos os chats para abastecer a lista
    fetchChats (){
        this.chats = this.db.list("/chats/");
    }
    
}