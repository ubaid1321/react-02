import FoodItems from "./FoodItems";
const ErrorMessage=(items)=>{
    let fooditems = [{items}]
return(
    <>
    {items.length===0 ? <h3>I am still hungry</h3>:null}
    </>
);
}
export default ErrorMessage;