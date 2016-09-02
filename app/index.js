import Admin from './models/admin';
import Artist from './models/artist';

const admin = new Admin();
console.log(admin.getUserPermission());
const artist = new Artist();
console.log(artist.getUserPermission());


import React  from 'react';
import ReactDOM  from 'react-dom';
import routes  from './config/routes';
ReactDOM.render(
    routes,
  document.getElementById('app')
)
