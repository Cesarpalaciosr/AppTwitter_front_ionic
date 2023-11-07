import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/http/authService/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private http: AuthService,
    private storage: Storage,
    public router: Router
  ) {}

  fields = {};

  ngOnInit() {}

  async loginUser() {
    try {
      const results = await this.http.doLogin(this.fields);
      if (results.status === 200) {
        console.log(results);
        this.storage.set('token', results.body.user.token);
        this.storage.set('_id', results.body.user._id);
        alert('Session start!');
        this.router.navigate(['/app']);
      }
    } catch (error: any) {
      if (error.status === 404 || error.status === 400) {
        alert('invalid credentials or user doesnt exist');
      }
    }
  }
}
