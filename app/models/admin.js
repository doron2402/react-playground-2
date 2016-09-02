import User from './user';

class Admin extends User {
    constructor(){
        super();
        console.log('admin')
        this.permission = 1;
    }
} 

export default Admin;