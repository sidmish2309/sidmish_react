import PropTypes from 'prop-types';

const Component1 = () => {
  return <h1>I am Component1</h1>
}


const Component2 = () => {
  return <h1>I am Component2</h1>
}


const ConditionalRendering = ({componentNumber}) => {
    //way1 (if else)
  if(componentNumber===1) return <Component1 />
  else return <Component2 />

  //way2 (ternary operator)
//   return componentNumber===1 ? <Component1 /> : <Component2 />

// way-3 (using && operator)
// return componentNumber===1 && <Component1 /> || <Component2 />
}

//props validation
ConditionalRendering.propTypes = {
    componentNumber: PropTypes.number.isRequired
};

export default ConditionalRendering
