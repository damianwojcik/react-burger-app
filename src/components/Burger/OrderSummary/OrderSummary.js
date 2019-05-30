import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This could be a functional component, made sateful just for testing purposes
  componentDidUpdate() {
    console.log('[OrderSummary]componentDidUpdate');
  }
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            <strong>{this.props.ingredients[igKey]}</strong>
          </li>
        );
      },
    );
    return (
      <>
        <h3>Your Order</h3>
        <p>A delicous burger with:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </>
    );
  }
}

export default OrderSummary;
