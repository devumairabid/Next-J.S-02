type ButtonTypes={
    buttonTitle:string
    onClickHandler:()=>void
}

function Button (props:ButtonTypes){
    console.log(props);

    const onClickHandler=()=>{
        console.log("Button clicked" , props.buttonTitle);}
    
    
    
    return(
        
            <button onClick={props. onClickHandler} >{props.buttonTitle} </button>
        
    )
}
export default Button