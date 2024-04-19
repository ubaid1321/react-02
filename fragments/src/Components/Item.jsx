import styles from "./Item.module.css"
const Item =({foodItems})=>{
    const handleBuyButtonClicked=(event)=>{
        console.log(event);
        console.log(`${foodItems} being bought`)
    }
    return(
        <>
         <li className="list-group-item" >
            <span>{foodItems}</span>
            <button className={`${styles.button} btn btn-info` } onClick={(event)=>handleBuyButtonClicked(event)}>Buy</button></li>
            </>
    )
}
export default Item;