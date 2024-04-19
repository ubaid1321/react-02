import { useState } from "react";
import Container from "./Components/Container";
import ErrorMessage from "./Components/ErrorMessage";
import FoodInput from "./Components/FoodInput";
import FoodItems from "./Components/FoodItems"

function App() {
let [textToShow,setTextToShow]= useState();
  let [foodItems,setfoodItems]=useState([])
  const onKeyDown=(event)=>{
    if (event.key==='Enter'){
      let newFooditem= event.target.value;
      event.target.value="";
      let newItems=[...foodItems,newFooditem]
      setfoodItems(newItems);
      console.log("Food value entered is" + newFooditem)
    }
    console.log(event.target.value);
    setTextToShow(event.target.value);
  }
  return (
    <>
 <Container>
  <Container><h1 className="food-heading">Healthy food</h1></Container>
  <FoodInput handleKeyDown={onKeyDown}/>
  <p>{textToShow}</p>
  <ErrorMessage items={foodItems} ></ErrorMessage>
   <FoodItems items={foodItems}></FoodItems>
   
 </Container>
 {/* <Container>
    <p>Above is the list of Healthy foods that are good for your health and well being</p>
   </Container> */}
 </>
  
  );
}

export default App
