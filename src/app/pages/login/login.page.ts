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
 /* constructor(
    private http: AuthService,
    private storage: Storage,
    public router: Router
  ) {}

  ngOnInit() {}

  fields = { email: '', password: '' };

  async loginUser() {
    try {
      const dataResults = await this.http.doLogin(this.fields);
      if (dataResults.status === 200) {
        console.log(dataResults);
        this.storage.set('token', dataResults.body.user.token);
        this.storage.set('_id', dataResults.body.user._id);
        alert('Session start!');
        this.router.navigate(['/app']);
      }
    } catch (error: any) {
      if (error.status === 404 || error.status === 400) {
        alert('invalid credentials or user doesnt exist');
      }
    }
  }*/

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
      /*{
          queryParams: { username:dataRes.user._id, token:dataRes.token },
          queryParamsHandling: 'merge' }*/
        );
        }catch(error:any){
      this.msg= error.msg;
      this.error() 
    }
  }
}
