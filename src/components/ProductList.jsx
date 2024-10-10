

const ProductList = () => {
  const products = [
    {id:1, name:"Samsung", price:199},
    {id:2, name:"Apple", price:999},
    {id:3, name:"Huawei", price:299},
  ];

  return (
    <div>
        {products.map(item=>(
            <div key={item.id}>
                <h2>{item.name}</h2>
                <p>Price: {item.price}</p>  
            </div>
        ))}
    </div>
  )
}

export default ProductList