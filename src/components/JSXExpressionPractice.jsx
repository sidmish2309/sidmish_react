
const JSXExpressionPractice = () => {
    const msg="Hello Siddharth";
    const date=new Date();

    const getfavNumber=()=>{
        return "Hello World";
    }

  return (
    <div>
        <h1>JSX Expression Practice</h1>
        <p>2+2={2+2}</p>
        <p>{msg}</p>
        <p>date: {date.toLocaleDateString()}</p>
        <p>Favourite Number: {getfavNumber()}</p>
    </div>
  )
}

export default JSXExpressionPractice