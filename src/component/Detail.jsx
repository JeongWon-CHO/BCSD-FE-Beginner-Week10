import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../SCSS/detail.scss';

function Detail( { category } ) {

    const { categoryId, itemId } = useParams();
    const location = useLocation();
    const { shops, todayDay } = location.state || { shops: [], todayDay: null };

    const shop = shops.find(shop => shop.id === parseInt(itemId));
    
    console.log(categoryId);

    return (
        <div>

            <div className='container-detail'>

                <div className="shopName-detail">{shop.name}</div>

                <div className='shopNum-contain-detail'>
                    전화번호
                    <span className="shopNum-detail">{shop.phone}</span>
                </div>

                {shop.open[todayDay] && !shop.open[todayDay].closed ? (
                    <div className='shopTime-contain-detail'>운영시간
                        <span className="shopTime-detail">{shop.open[todayDay].open_time} ~ {shop.open[todayDay].close_time}</span>
                    </div>
                ) : (
                    <p>Closed</p>
                )}

            </div>

        </div>
    )
}

export default Detail;
