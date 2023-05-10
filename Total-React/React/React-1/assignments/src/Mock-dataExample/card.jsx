const CardFetch = (props)=>{
    return(
        <div>
            <p>{props.data.name}</p>
            <img src={props.data.PostImage} alt="random user" width="350px" height="350px"></img>
        </div>
    )
}

export default CardFetch;