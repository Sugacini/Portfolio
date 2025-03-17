import { useRef } from "react";

var styleArr = [];
function Menu(props){

    const menuStyle = useRef(); 
    
    function menuHandler(e){
        console.log(e.target.id);
        styleArr.push(e.target.id);
        for(let i=0; i<styleArr.length; i++){
            document.getElementById(styleArr[i]).style.backgroundColor = "transparent";
            // document.getElementById(styleArr[i]).style.color = "white";
        }
       menuStyle.current.style.backgroundColor = "#F1F6EF";
       menuStyle.current.style.color = "black";
       menuStyle.current.style.borderRadius = "10px";
    }

    return(
        <a href={props.link} className={props.className} id={props.id} onClick={menuHandler} ref={menuStyle}>{props.menuName}</a>
    )
}

export default Menu;