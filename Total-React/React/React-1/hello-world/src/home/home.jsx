import Card from "../card/card";

const Home = () =>{
    const data = [
        {title:"Grocery", imageUrl:"", description:"Contains grocery items", buttonText:"More Info"},
        {title:"Electronics", imageUrl:"", description:"Contains Electronics items", buttonText:"More Info"}
    ]
    return (
        <div>
            Home Works!
            {data.map((cardBio)=>{
                return <Card cardData={cardBio}></Card>
            })
            }
            {/* <Card cardData = {data[0]}></Card>
            <Card cardData = {data[1]}></Card> */}
        </div>
    )
}

export default Home;

   