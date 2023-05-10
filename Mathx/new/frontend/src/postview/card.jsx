import "./style.css"


const CardInstaClone = (props) => {
    
    const { rec } = props
    const { m } = props
    const data = ['Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun', 'Jul', 'Aug',
        'Sept', 'Oct', 'Nov', 'Dec']

    const month = data[m - 1]
    console.log(month);

    return (
        <>
            <div className="container">
                <section className="container-row">
                    <article className="row container-row1">
                        <h2 className="row bold">{props.rec.name}</h2>
                        <p className="row light">{rec.location}</p>
                    </article>
                    <img src='dots-loading.png' className="dot-img" alt="toview" height='30px' width='40px'></img>
                </section>

                <img src={rec.PostImage} alt="insta-img" height="199px" width="445px" className="img1 "></img>

                <div className="icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/8184/8184268.png" alt="image1" className="icon-img" height="36px"></img>
                    <img src="https://as2.ftcdn.net/v2/jpg/02/74/64/11/1000_F_274641162_RIC3HZnzMRILg62eQj2gfUs3xNa7Prxh.jpg" alt="image2" height="38px" className="icon-img"></img>
                    <span className="icon-date">{`${props.rec.date.split("/")[1]} ${month} ${props.rec.date.split("/")[2]}`}</span>

                </div>
                <section className="likes">{`${rec.likes} likes`}</section>
                <section className="row">
                    <h4 className="row-last">{rec.description}</h4>
                </section>
            </div>
        </>
    )
}
export default CardInstaClone;