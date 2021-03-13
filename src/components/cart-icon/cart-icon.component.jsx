import {React} from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { toggletCartHidden} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

const CartIcon = ({toggletCartHidden, itemCount}) => (
    <div className = 'cart-icon' onClick={toggletCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = state =>(
  {
    itemCount:selectCartItemsCount(state)
  }
);

const mapDispatchToProps = dispatch =>({
    toggletCartHidden: () => dispatch(toggletCartHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);