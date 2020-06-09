export class User {
  id: string;
  pass: string;
  userName: string;
  lastName: string;


constructor(private username: string, private lastname: string){
this.userName = username;
this.lastName = lastname;
}
 }
