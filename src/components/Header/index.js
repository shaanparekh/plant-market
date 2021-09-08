import { useSelector } from 'react-redux';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

import Logo from './../../assets/logo.png';

const mapState = ({user}) => ({
    currentUser: user.currentUser
});

const Header = props => {

    const { currentUser } = useSelector(mapState);

    return(
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="SeedSwap logo"/>
                    </Link>  
                </div>

                <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search">
                Search
              </Link>
            </li>
          </ul>
        </nav>

                <div className="callToActions">
                    {currentUser && (
                        <ul>
                            <li>
                            <Link to="/dashboard">
                                My Account
                            </Link>
                            </li>
                            <li>
                            <Link to="/sell">
                                Sell Products
                            </Link>
                            </li>
                            <li>
                                <span onClick = {() => auth.signOut()}>
                                    Logout
                                </span>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (
                    <ul>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
  };



export default Header; 
