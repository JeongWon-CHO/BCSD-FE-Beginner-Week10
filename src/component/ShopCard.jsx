import React from 'react';
import '../SCSS/card.scss';

function ShopCard( { shop, todayDay} ) {

    return (

        <div>

            <div className='container-card'>

                <div className="shopName">{shop.name}</div>

                <div>
                    전화번호
                    <span className="shopNum">{shop.phone}</span>
                </div>

                {shop.open[todayDay] && !shop.open[todayDay].closed ? (
                    <div>운영시간
                        <span className="shopTime">{shop.open[todayDay].open_time} ~ {shop.open[todayDay].close_time}</span>
                    </div>
                ) : (
                    <p>Closed</p>
                )}

            </div>

        </div>

    )

}

export default ShopCard;