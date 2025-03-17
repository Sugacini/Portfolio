import "../style.css"

function Logo(props){
    return(
        <>
            <h2 className="logoName">{props.name}</h2>
        </>
    )
}

export default Logo;