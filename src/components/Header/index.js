import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

import Logo from './../../assets/logo.png';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
});

const Header = props => {

    const { currentUser, totalNumCartItems } = useSelector(mapState);

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
        <ul>
            <li>
            <Link to="/cart">
                Your Cart ({totalNumCartItems})
              </Link>
            </li>

            {currentUser && [
                <li>
                    <Link to="/dashboard">
                        My Account
                    </Link>
                </li>,
                <li>
                    <Link to="/sell">
                        Sell Products
                    </Link>
                </li>,
                <li>
                    <span onClick = {() => auth.signOut()}>
                        Logout
                    </span>
                </li>
            ]}

            {!currentUser && [
                <ul>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
                ]}
                </ul>
                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
  };



export default Header; 
