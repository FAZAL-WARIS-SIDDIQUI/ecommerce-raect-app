import React from "react";
export const Mycard = ({ card }) => {
    return (
        <div>
            {
                card.map((cardItem, cardIndex) => {
                    return (
                        <div className="mycard">
                            <div className="card1">
                                <img className="img" src={cardItem.url} />
                                <div className='mycard-lowerchild'>
                                    <spam >{cardItem.name}</spam><br />
                                    <spam >{cardItem.category}</spam><br />
                                    <spam className='rs-colour'>Rs./{cardItem.price}</spam><br />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="checkout">
                <p>your total is PKR/-
                    {
                        card.map(item => item.price).reduce((total, value) => total + value, 0)
                    }
                </p>

                <button className="btn" type="submit" onClick={() => {
                    window.location.reload(false)
                }}>checkout</button>
            </div>
        </div>
    )
}