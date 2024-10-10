import PropTypes from 'prop-types';

const Parent = () => {
  return <Child
  img="https://picsum.photos/200"
  name="Siddharth"
  age={25}
  isMarried={false}
  hobbies={["Coding", "Reading", "Photography"]}
  />
};


const Child = (props) => {
  return (
    <section>
        <img src={props.img} alt={props.name} width={200}/>
        <h1>Name: {props.name}</h1>
        <p>Age: {props.age}</p>
        <p>isMarried: {props.isMarried}</p>
        <p>Hobbies: {props.hobbies}</p>
    </section>
  )
};

Child.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isMarried: PropTypes.bool.isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Parent