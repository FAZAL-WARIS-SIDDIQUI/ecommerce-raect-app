import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { AiFillLinkedin, AiFillFacebook, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { MdOutgoingMail } from 'react-icons/md'
const Productlist = (props, addTocard) => {
    return (
        <div>
            <div className="padiing">
                <br></br><br></br><br></br><br></br>
                <div class="wrapper">
                    <div class="static-txt">Welcome to Men FACTION</div>
                    <div className="center">
                        <ul class="dynamic-txts">
                            <li><span>SHIRTS</span></li>
                            <li><span>BELT</span></li>
                            <li><span>WACHES</span></li>
                            <li><span>PAINTS</span></li>
                        </ul>
                    </div>
                </div>
                <div class="container">
                    <div class="box"><img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhib9hULaHwG604Nc9xUnjSzZ5slaPIjGlw&usqp=CAU" /></div>
                    <div class="box"><img className="img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJnQ3UmF4O7bqFLnq_LhMRbX8JWYRRdYsHQ&usqp=CAU' /></div>
                    <div class="box"><img className="img" src="data:image/jpeg;base64,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" /></div>
                    <div class="box"><img className="img" src='data:image/jpeg;base64,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' /></div>
                </div>
                <div className="blog">
                    <h1 color="rgb(20, 63, 56)">Products </h1>

                </div>
            </div>
            <div className="product-container">
                {
                    props.product.map((productItem, productindex) => {
                        return (
                            <div key={productindex} className='prouduct-list' >
                                <img src={productItem.url} className='img' />
                                <p> {productItem.name} ||| {productItem.category}</p>
                                <p>{productItem.seller}</p>
                                <p>Rs./{productItem.price}</p>
                                <button onClick={() => props.addTocard(productItem)} className="btn">ADD TO CARD</button>
                            </div>
                        )

                    })
                }
            </div>
            <div >
                <div className="blogs"><h1>Our Servies</h1></div>
                <div className="our">
                    <span className="ship2" >
                        <MdLocalShipping
                            onMouseOver={({ target }) => target.style.color = "black"}
                            onMouseOut={({ target }) => target.style.color = "white"}
                            className="ship" />
                        <h3>SHIPPING CHARGES</h3>
                        <p>Flat Charges: PKR 99 on all orders</p>
                        <BiSupport
                            onMouseOver={({ target }) => target.style.color = "black"}
                            onMouseOut={({ target }) => target.style.color = "white"}
                            className="ship" />
                        <h3>SUPPORT 24/7</h3>
                        <p>Contact us 34 hours a day ,7 days of a week</p>
                    </span>
                </div>
            </div>
            <div>
                <div className="blogs"><h1>Contact Us</h1></div>
                <div className="foter" >
                    <AiFillLinkedin onMouseOver={({ target }) => target.style.color = "black"}
                        onMouseOut={({ target }) => target.style.color = "white"} className="ship" />
                    <AiFillFacebook onMouseOver={({ target }) => target.style.color = "black"}
                        onMouseOut={({ target }) => target.style.color = "white"} className="ship" />
                    <AiFillYoutube onMouseOver={({ target }) => target.style.color = "black"}
                        onMouseOut={({ target }) => target.style.color = "white"} className="ship" />
                    <AiFillInstagram onMouseOver={({ target }) => target.style.color = "black"}
                        onMouseOut={({ target }) => target.style.color = "white"} className="ship" />
                    <hr />
                    <p className="para">
                        Digital Watches: Digital watches use a digital display to show the time and other functions like stopwatch, timer, and alarm. They often have a sleek, modern design and are ideal for sports and outdoor activities.
                        <br /><br />
                        Materials: Men's belts can be made of a variety of materials, including leather, suede, canvas, and nylon. Leather belts are the most common and versatile, and can be dressed up or down depending on the occasion.
                    </p>

                </div>
                <div className="foter-end">
                    <p>
                        This is simple E-commerces website developed on react js
                    </p>
                    <p>
                        @ Developed by FAZAL WARIS SIDDIQUI
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Productlist


