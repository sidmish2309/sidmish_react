const JSXExpressionProductInfo = () => {
    const product={
        name: "Laptop",
        price:199,
        availability:"In Stock",
    }
  return (
    <div>
        <h1>JSX Expression Product Info</h1>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Availability: {product.availability}</p>
    </div>
  )
}

export default JSXExpressionProductInfo