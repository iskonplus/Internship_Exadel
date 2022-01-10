import { Component } from '@angular/core';
import { UserLoginService } from './services/user-login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sandbox candidate handler';
  user = "guest"; // recruiter || techInterviewer || mentor || manager || admin
  role = '';


  constructor(private userLoginService: UserLoginService) {

  }

  ngOnInit() {
    const potentialToken = localStorage.getItem('authToken');
    if (potentialToken !== null) {

      this.role = this.userLoginService.setRole(potentialToken);
      this.userLoginService.setReloadRole(this.role);
      this.userLoginService.setToken(potentialToken);
    }
  }

}
