import Card from "../card/card";

const Product = ()=> {

    const data = [{title:"SHAMPOO", imageUrl:"", description:"Contains Shampoo items", buttonText:"More Info", secondaryText:"BUY NOW"},
            {title:"CHOCOLATES", imageUrl:"", description:"Contains Chocolates items", buttonText:"More Info", secondaryText:"BUY NOW"}]
    return (
        <div>
            Product Works!!
            <Card cardData={data[0]} isAddtoCart={true}></Card>
            <Card cardData={data[1]} isAddtoCart={true}></Card>
        </div>
    )
}

export default Product;