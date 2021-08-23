import { Component } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isadmin!:boolean;
  isLogged:boolean=false;
  username!:string;

  menuActive: boolean=false;

  constructor(private oauthService: OAuthService,
    private loginservice:LoginService) {
    this.configure();
  }
authConfig: AuthConfig = {
  issuer: 'http://localhost:8180/auth/realms/Boosturbuild',
  redirectUri: window.location.origin,
  clientId: 'frontend',
  responseType: 'code',
  scope: 'openid profile email offline_access',
  showDebugInformation: true,
  }
  
  public login() {
    this.oauthService.initLoginFlow();
  }
  
  public logoff() {
    this.oauthService.logOut();
  }
  
  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().
    then(() => this.oauthService.tryLogin()).
    then(() => { 
      if(this.oauthService.getIdentityClaims()){
        
        this.isadmin= this.loginservice.getIsAdmin();
        this.isLogged=this.loginservice.getIsLogged() ; 
    this.username= this.loginservice.getUsername();
   console.log("Access Tocken "+this.oauthService.getAccessToken())
    console.log(this.username+" isLogged"+this.isLogged+" isAdmin"+this.isadmin);
 
    }
    });
  }
  onMenuButtonClick() {
    this.menuActive = true;
    this.addClass(document.body, 'blocked-scroll');
}
addClass(element: any, className: string) {
  if (element.classList)
      element.classList.add(className);
  else
      element.className += ' ' + className;
}
onMaskClick() {
  this.hideMenu();
}

hideMenu() {
  this.menuActive = false;
  this.removeClass(document.body, 'blocked-scroll');
}
removeClass(element: any, className: string) {
  if (element.classList)
      element.classList.remove(className);
  else
      element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
}
