import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/Firebase';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelector';

import './Header.scss';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const Header = ({ currentUser, hidden }) => (  
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser
                ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                : <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null:
            <CartDropdown />
        }
    </div>
);

 
export default connect(mapStateToProps)(Header);