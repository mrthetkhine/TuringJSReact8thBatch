type User = {
    id:number,
    admin:boolean,
    something:string,
    becomeAdmin:()=>void
}
const user:User = {
    id: 123,
    admin: false,
    something:'',
    becomeAdmin: function () {
      this.admin = true;
      this.something = "Hello";
    },
};
user.becomeAdmin();
console.log('User ',user);

interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
}
   
  const db = getDB();
  const admins = db.filterUsers(function (this: User) {
    return this.admin;
  })