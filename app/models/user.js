class User {
    constructor() {
        console.log('create user.');
        this.permission = 10;
    }
    setUserFullName({first, middle='', last}) {
        this.name = {
            first,
            last
        };
    }
    getFullName() {
        return this.name;
    }
    getFirstName() {
        return this.name.first;
    }
    getLastName() {
        return this.name.last;
    }
    getUserPermission() {
        return this.permission;   
    }
}

export default User;