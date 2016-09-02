import React from 'react';
import { Link } from 'react-router';
import { transparentBg } from '../styles';

const Header = React.createClass({
  render: function() {
    return (
        <nav className="navbar navbar-default navbar-static-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to='/'>Logo</Link>
                </div>
            </div>
        </nav>
    )
  }
});

export default Header;