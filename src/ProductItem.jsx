import React, { Component } from 'react';
import Checkbox from 'muicss/lib/react/checkbox';
var pTier,pRange;
export default class ProductItem extends Component {
  constructor(props)
  {
    super(props);
    this.state ={isEdit:false}
    this.editProduct = this.editProduct.bind(this);
    this.editProductSubmit = this.editProductSubmit.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    checked: true
  };

   onSubmit(ev) {
    alert(this.input.controlEl.checked);
    this.input.controlEl.checked=true;
  }
  handleChange(event) {
    pTier=event.target.value;
    this.setState({value: event.target.value});
   // alert('Your favorite flavor is: ' + pTier);
  }
  handleSubmit(event) {
    pRange=event.target.value;
    this.setState({value: event.target.value});
   // alert('Your favorite flavor is: ' + pRange);
  }
  deleteProduct()
  {
    const {id} = this.props.Product;
    this.props.deleteProduct(id);
  } 
  editProduct()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }))
  }
  editProductSubmit()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
    this.props.editProductSubmit(this.props.Product.id,this.nameInput.value,pTier,pRange,this.weightInput.value,this.availabilityInput.value,this.productUrlInput.value);
  }
    render() {
        let edit;
        const {name,pricingTier,priceRange,weight,availability,productUrl,isEditable} = this.props.Product;
        if(isEditable === true){
          edit= <i className="far fa-edit" onClick={this.editProduct}><b> Edit</b>  </i>;
        }else{
          edit="";
        }
        if(pTier == 'Budget'){
          return (
            this.state.isEdit === true ? 
                <tr className="" key={this.props.index}>
                <td><input ref={nameInput => this.nameInput = nameInput} defaultValue ={name}/></td>
                <td>
                <form>
                  <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                      <option value="pT">Pricing Tier Select</option>
                      <option value="Budget">Budget</option>
                      <option value="Premier">Premier</option>
                    </select>
                  </label>
                </form></td>
                <td>
                    <form>
                    <label>
                      <select value={this.state.value} onChange={this.handleSubmit}>
                        <option value="pR">Pricing Range Select</option>
                        <option value="4k-6k">4k-6k</option>
                        <option value="6k-9k">6k-9k</option>
                        <option value="9k-11k">9k-11k</option>
                      </select>
                    </label>
                  </form>
                  </td>
                <td><input defaultValue={weight} ref={weightInput => this.weightInput = weightInput}/></td>
                <td><input ref={availabilityInput => this.availabilityInput = availabilityInput} defaultValue={availability}/></td>
                <td><input defaultValue={productUrl} ref={productUrlInput => this.productUrlInput = productUrlInput}/></td>
                <td><i className="far fa-save" onClick={this.editProductSubmit}></i></td>
                <td><form onSubmit={this.onSubmit.bind(this)}>
                      <Checkbox label="Is Editable" ref={el => { this.input = el; }} />
                      </form>
                  </td>
                
                </tr>:
                <tr key={this.props.index}>
                  <td>{name}</td><td>{pricingTier}</td>
                  <td>{priceRange}</td><td>{weight}</td>
                  <td>{availability}</td><td>{productUrl}</td>
                  <td>{edit}</td>
                  <td><i className="fas fa-trash" onClick={this.deleteProduct}></i></td>
                  </tr>
          );
        }
    else{
      return (
        this.state.isEdit === true ? 
        <tr className="" key={this.props.index}>
        <td><input ref={nameInput => this.nameInput = nameInput} defaultValue ={name}/></td>
        <td>
        <form>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="pT">Pricing Tier Select</option>
              <option value="Budget">Budget</option>
              <option value="Premier">Premier</option>
            </select>
          </label>
        </form></td>
        <td>
        <form>
          <label>
            <select value={this.state.value} onChange={this.handleSubmit}>
              <option value="pR">Pricing Range Select</option>
              <option value="11k-20k">11k-20k</option>
              <option value="20k-30k">20k-30k</option>
              <option value="30k+">30k+</option>
            </select>
          </label>
        </form>
          </td>
        <td><input defaultValue={weight} ref={weightInput => this.weightInput = weightInput}/></td>
        <td><input ref={availabilityInput => this.availabilityInput = availabilityInput} defaultValue={availability}/></td>
        <td><input defaultValue={productUrl} ref={productUrlInput => this.productUrlInput = productUrlInput}/></td>
        <td><i className="far fa-save" onClick={this.editProductSubmit}></i></td>
        <td><form onSubmit={this.onSubmit.bind(this)}>
                      <Checkbox label="Is Editable" ref={el => { this.input = el; }} />
                      
                      </form>
                  </td>
        </tr>:
        <tr key={this.props.index}>
          <td>{name}</td>
          <td>{pricingTier}</td>
          <td>{priceRange}</td>
          <td>{weight}</td>
          <td>{availability}</td>
          <td>{productUrl}</td>
          <td>{edit}</td>
          <td><i className="fas fa-trash" onClick={this.deleteProduct}></i></td>
          </tr>
      );
    }
    }
  }
