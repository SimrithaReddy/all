import React from "react";
import { Link } from "react-router-dom";
import landingPage from "./landing.png"
import "./land.css"
const Landingpage = () => {
    return (
        
            <div className="div-land">
                <section className="landing">
                    <img src={landingPage} alt="loader" className="land-img"></img>
                    <article className="land-txt">
                        <h2 className="land-head">10X Team 04</h2>
                        <Link to="/instaClone">
                            <button id="btn">
                                Enter
                            </button>
                        </Link>
                    </article>
                </section>
            </div>

        
    )
}

export default Landingpage;