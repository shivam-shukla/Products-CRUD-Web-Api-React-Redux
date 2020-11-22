const ProductReducer = (state = [],action) => {

    switch(action.type){
    
    case 'ADD_Product':
    let stateCopy = [...state,action.payload];
    localStorage.setItem('Products',JSON.stringify(stateCopy));
    return stateCopy
    
    case 'DELETE_Product':
    stateCopy = state.filter( x => x.id !== action.payload);
    localStorage.setItem('Products',JSON.stringify(stateCopy));
    return stateCopy
        
    case 'UPDATE_Product':
    
    stateCopy = state.map((Product) => {
        const {id,name,pricingTier,priceRange,weight,availability,productUrl} = action.payload;
        if(Product.id === id)
        {
        Product.name = name;
        Product.pricingTier = pricingTier;
        Product.priceRange = priceRange;
        Product.weight = weight;
        Product.availability = availability;
        Product.productUrl = productUrl;
        }
        return Product;
    })
    localStorage.setItem('Products',JSON.stringify(stateCopy));
    return stateCopy
    
    default:
        return state;
    }
    
    }
    export default ProductReducer;    