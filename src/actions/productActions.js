export function addProduct(Product)
{
    return {
    type:'ADD_Product',
    payload:Product
    }
}

export function deleteProduct(Id)
{
    return {
    type:'DELETE_Product',
    payload:Id
    }
}

export function updateProduct(Product)
{
    return {
        type:'UPDATE_Product',
        payload:Product
        }

}