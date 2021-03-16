import React from 'react';
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector'
import { createStructuredSelector } from "reselect";
import { CheckoutPage } from "../../pages/checkOut/checkout.component";
import { toggletCartHidden} from '../../redux/cart/cart.actions'
import { withRouter } from 'react-router-dom';


const CartDropdown = ({ cartItems,history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length ?
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            )) :
            <span className="empty-message">Your Cart is empty</span>
            }
        </div>
        <CustomButton inverted onClick={() => {
            dispatch(toggletCartHidden());
            history.push('/checkout')}}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));