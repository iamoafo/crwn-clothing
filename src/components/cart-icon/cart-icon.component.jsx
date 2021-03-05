import {React} from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { toggletCartHidden} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux';

const CartIcon = ({toggletCartHidden}) => (
    <div className = 'cart-icon' onClick={toggletCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch =>({
    toggletCartHidden: () => dispatch(toggletCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon);