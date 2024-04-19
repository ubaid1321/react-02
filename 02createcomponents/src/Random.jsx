function Random(){
    let Number=Math.floor(Math.random()*10);
    return(
        <h1 style={{'backgroundColor':"blue"}}>Random No. is: {Number}</h1>
    )
}
export default Random;