const Card = ({cardData, isAddtoCart}) =>{
   // console.log(props,"--------->data from home");
    return (
        <div className="card-container">
            <section className="title">{cardData?.title}</section>
            <section className="card-image"></section>
            <section className="card-description">{cardData?.description}</section>
            <button className="primary-button">{cardData.buttonText}</button>
            {isAddtoCart && <button className="secondarybutton">{cardData.secondaryText}</button>}
        
        </div>
        
    )
}
export default Card;