import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
import { DataService } from "src/app//services/data/data.services";
import { Storage } from '@ionic/storage-angular';
import { AuthService } from 'src/app/services/http/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 

  constructor(private dataservice:DataService,private alertController: AlertController, private router:Router) { }

  username:string = "";
  pass:string = "";

  msg:string ="";

  Data={
  "username": "",
  "password": "",
  }



  ngOnInit() {
  }

  async error (){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: `${this.msg}` ,
      buttons: ['OK'],
    });

    await alert.present();
  }

 async login(){
    this.Data.username=this.username;
    console.log(this.username);
    
    this.Data.password=this.pass;
    console.log(this.pass);
    
    console.log(this.Data);
    
    try{
      const dataRes = await this.dataservice.login(this.Data)
      const {token} = dataRes;
      console.log(token);
       
      this.router.navigate(
        ['/home'],
     
        );
        }catch(error:any){
      this.msg= error.msg;
      this.error() 
    }
  }
}
