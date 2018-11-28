import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { ToastController } from 'ionic-angular';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  calendars = [];
  janeiro = [];
  data : Date;

  constructor(public navCtrl: NavController, private calendar: Calendar, private plt: Platform, public toastCtrl: ToastController) {
    this.data = new Date();
    this.data.setDate(this.data.getDate() + 3);
    this.data.toISOString();
    
    this.calendars.push({"titulo":"Evento 1","localizacao":"Igreja Presbiteriana de Mauá","descricao":"Descrição do evento", "data": this.data, "hora":"17:00"},);
    this.calendars.push({"titulo":"Evento 2","localizacao":"Congregação do Jardim Zaíra","descricao":"Descrição do evento", "data": this.data, "hora":"19:00"});
    this.calendars.push({"titulo":"Evento 3","localizacao":"Igreja Presbiteriana de Mauá","descricao":"Descrição do evento", "data": this.data, "hora":"19:30"});
    this.calendars.push({"titulo":"Evento 4","localizacao":"Igreja Presbiteriana de Mauá","descricao":"Descrição do evento", "data": this.data, "hora":"10:00"});

    this.janeiro.push({"titulo":"Evento 5","localizacao":"Igreja Presbiteriana de Mauá","descricao":"Descrição do evento", "data": this.data, "hora":"17:00"},);
    this.janeiro.push({"titulo":"Evento 6","localizacao":"Congregação do Jardim Zaíra","descricao":"Descrição do evento", "data": this.data, "hora":"19:00"});
    this.janeiro.push({"titulo":"Evento 7","localizacao":"Igreja Presbiteriana de Mauá","descricao":"Descrição do evento", "data": this.data, "hora":"19:30"});
    this.janeiro.push({"titulo":"Evento 8","localizacao":"Igreja Presbiteriana de Mauá","descricao":"Descrição do evento", "data": this.data, "hora":"10:00"});

    this.findEvents();
  }

  addEvent() {

    

    this.calendars.forEach(cal => {
      this.calendar.createEvent(cal.titulo, cal.localizacao, cal.descricao, cal.data, cal.data).then(res => {
        const toast = this.toastCtrl.create({
          message: 'Evento ' + cal.titulo + ' adicionado ao calendário!',
          duration: 3000
        });
        toast.present();
      }, err => {
        console.log('err: ', err);
      });
    });
  }

  findEvents(){
    
  } 

}
