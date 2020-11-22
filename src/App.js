import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList.jsx';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addProduct,deleteProduct,updateProduct} from './actions/productActions'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.addNewProduct = this.addNewProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.editProductSubmit = this.editProductSubmit.bind(this);
  }
  componentWillMount(){

  }
  addNewProduct()
  {
this.props.addProduct({id:Math.max(...this.props.ProductList.map(function(o){return o.id})) + 1,name:'',pricingTier:'',priceRange:'',weight:"",availability:"",productUrl:""});
  }

  deleteProduct(id)
  {
    let r = window.confirm("Do you want to delete this item");
    if( r === true)
    {
    this.props.deleteProduct(id);
   
  }
  }
 
  editProductSubmit(id,name,pricingTier,priceRange,weight,availability,productUrl)
  {
   this.props.updateProduct({id:id,name:name,pricingTier:pricingTier, priceRange: priceRange,weight:weight,availability:availability,productUrl:productUrl});
  }
  render() {
    return (
      <div className="container-fluid">
      <div className="row mt-3"><div className="col-lg-12">
      <div className="card">
       <div className="card-header">
       <h1>React App : Product List</h1> 
        </div>
         <div className="card-body">
            <table className="table table-hover">
             <thead className="thead-dark"><tr><th>Name</th><th>Pricing Tier</th><th>Price Range</th><th>Weight</th><th>Availability</th>
             <th>Product URL</th> <th>Edit/Save</th></tr></thead>
             <ProductList deleteProduct={this.deleteProduct} ProductList={this.props.ProductList} editProductSubmit={this.editProductSubmit}/>
            </table>
            <button className="btn btn-dark pull-left" onClick={this.addNewProduct}>Add New</button>
          </div>
          <div className="App-footer"> © ℗®™ Shivam Shukla </div>  
        </div>
        </div>
        </div>
        
        </div>
        
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ProductList : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addProduct:addProduct,
    deleteProduct:deleteProduct,
    updateProduct:updateProduct
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
