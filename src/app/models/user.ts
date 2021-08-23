export class User {
  
    id: any
    
    createdTimestamp!: number
    username!: string
    enabled!: boolean
   
    password!: any
    firstName!: any
    lastName!: any
    email: any
  
    attributes!: string[]
    roles!:string[]
    constructor(id:any,
       username:string,
      email:string,
      firstName:string,
      lastName:string,
      password:string,
      atrributes:string[],
      roles:string[]
      ){this.id=id
          this.username=username;
          this.firstName=firstName;
          this.lastName=lastName;
          this.password=password;
          this.email=email;
          this.attributes=atrributes;
          this.roles=roles;
  
      }
  }
  
  