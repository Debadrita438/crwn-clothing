import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo} from '../../assets/crown.svg';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectCartHidden } from '../../redux/cart/cartSelector';
import { signOutStart } from '../../redux/user/userAction';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export const Header = ({ currentUser, hidden, signOutStart }) => (  
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            {
                currentUser
                ? <OptionLink as='div' onClick={ signOutStart }>SIGN OUT</OptionLink>
                : <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null:
            <CartDropdown />
        }
    </HeaderContainer>
);
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);