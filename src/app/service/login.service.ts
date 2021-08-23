import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private oauthService: OAuthService) { }

  public login(): void {
    this.oauthService.initImplicitFlowInternal();
  }

  public logout(): void {
    this.oauthService.logOut();
  }

  public getIsLogged(): boolean {
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  public getUsername(): string {
    const token = this.oauthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodedJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodedJson);
 return  payloadDecoded.preferred_username;
  }
public tocken():string{
  return      this.oauthService.getAccessToken();
}
  public getIsAdmin(): boolean {
    const token = this.oauthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodedJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodedJson);
    // console.log(payloadDecoded.realm_access.roles);
    console.log("payloadDecoded.realm_access.roles.indexOf('root') = "+payloadDecoded.realm_access.roles.indexOf('root'));
    return payloadDecoded.realm_access.roles.indexOf('root') !== -1;
  }

  public roles(): string[] {
    const token = this.oauthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodedJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodedJson);
    // console.log(payloadDecoded.realm_access.roles);
    console.log("payloadDecoded.realm_access.roles.indexOf('root') = "+payloadDecoded.realm_access.roles.indexOf('root'));
    return payloadDecoded.realm_access.roles;
  }



  public getIsAdminP(): boolean {
    const token = this.oauthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodedJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodedJson);
console.log("Roles "+payloadDecoded.realm_access.roles);
console.log("payloadDecoded.realm_access.roles.indexOf('admin-parc') = "+payloadDecoded.realm_access.roles.indexOf('admin-parc'));
    return payloadDecoded.realm_access.roles.indexOf('admin-parc') !== -1;
  }
}
