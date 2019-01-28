import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = ( props ) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        })
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicous burger with:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                btnType="Danger"
                clicked={props.purchaseCancelled}
            >Cancel</Button>
            <Button
                btnType="Success"
                clicked={props.purchaseContinued}
            >Continue</Button>
        </>
    );
};

export default OrderSummary;