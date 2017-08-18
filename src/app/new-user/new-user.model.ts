export class User {
  avatar: string;
  user: string;
  email: string;
  info: string;

  constructor(avatar: string, user: string, email: string, info?: string) {
    this.avatar = avatar;
    this.user = user;
    this.email = email;
    this.info = info || 'No info available';
  }



}
