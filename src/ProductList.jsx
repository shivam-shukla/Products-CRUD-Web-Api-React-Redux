import React, { Component } from 'react';
import ProductItem from './ProductItem.jsx';

export default class ProductList extends Component {
    render() {
        let Products = this.props.ProductList;
        const trItem = Products.map( (item,index) => <ProductItem key={index} Product={item} index={index} editProductSubmit={this.props.editProductSubmit} deleteProduct={this.props.deleteProduct}/>)
      return (
            <tbody>{trItem}</tbody>
      );
    }
  }