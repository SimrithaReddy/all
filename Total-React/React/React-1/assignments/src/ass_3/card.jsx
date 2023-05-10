const Card = ({cardInfo}) =>{
    return(
        <div>
            <h1 data-ns-test="project-name">{cardInfo.pname}</h1>
            <p data-ns-test="project-description">{cardInfo.pdescription}</p>
        </div>
    )
}
export default Card;