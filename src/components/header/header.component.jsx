import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector'
import { selectCurrentUser } from "../../redux/user/user.selector";
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from './header.styles'



const Header = ({currentUser, hidden}) => (
    
<HeaderContainer>
<LogoContainer to='/'>
    <Logo className='logo'/>
</LogoContainer>
<OptionsContainer>
<OptionLink to='/shop'>shop</OptionLink>
<OptionLink to='/contact'>contact</OptionLink>
{
   
    currentUser ? 
    
   ( <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>)
     : 
    (<OptionLink className='option' to='/signin'>Sign In</OptionLink>
    )
    
    }

  <CartIcon />
</OptionsContainer>
{hidden ? null : <CartDropdown/>}
</HeaderContainer>


)


const mapStateToProps = createStructuredSelector({
currentUser: selectCurrentUser,
hidden: selectCartHidden

});


export default connect(mapStateToProps)(Header);