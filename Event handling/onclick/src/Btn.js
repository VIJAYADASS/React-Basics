function Btn(){
    
    //const clickhandler = () => console.log('Clicked') // define the clickhandler return functionconst clickhandler = () => console.log('Clicked') // define the clickhandler return function
    const clickhandler = () => console.log('mouse Over') // define the OnMouseOver return functionconst clickhandler = () => console.log('Clicked') // define the clickhandler return function
     
    return(

        <button onMouseOver = {clickhandler}>
            Click me</button>
    );
}


export default Btn;
