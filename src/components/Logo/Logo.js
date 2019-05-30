import React from 'react';
import { Link } from 'react-router-dom';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = props => (
  <div className={classes.Logo}>
    <Link to="/">
      <img src={burgerLogo} alt="Logo" />
    </Link>
  </div>
);

export default Logo;
