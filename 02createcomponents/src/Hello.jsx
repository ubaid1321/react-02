function Hello(){
    let myName="Ubaid"
    let number=456;
    let fullName=()=>{
        return 'Ubaid Mir'
    }
    return (
    <h3>Message No. {number} Hello this is future speaking.I am the master {fullName()}</h3>
    );
}
export default Hello;