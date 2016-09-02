import User from './user';

class Artist extends User {
    constructor(){
        super();
        console.log('artist');
        this.permission = 5;
    }
} 

export default Artist;