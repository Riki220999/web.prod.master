import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

class Header extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    const isHome = pathname === '/';
    const isJustAnotherPage = pathname === '/page';
    const dashboardPage = pathname === '/dashboard';

    return (
      <header className={styles.globalHeader}>
        <ul>
          <li className={!isHome ? styles.active : ''}>
            {isHome ? 'Home' : <Link to="/">Home</Link>}
          </li>
          <li className={!dashboardPage ? styles.active : ''}>
            {dashboardPage ? 'Dashboard' : <Link to="/dashboard">Dashboard</Link>}
          </li>
          <li className={!isJustAnotherPage ? styles.active : ''}>
            {isJustAnotherPage ? (
              'Just Another Page'
            ) : (
              <Link to="/page">Just Another Page</Link>
            )}
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
