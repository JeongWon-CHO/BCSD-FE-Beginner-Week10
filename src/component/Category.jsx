import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ShopCard from './ShopCard';
import '../SCSS/card.scss';

function Category({ category }) {

    console.log("Category 페이지입니다.");
    console.log(category);


    const location = useLocation();
    const { shops, todayDay } = location.state || { shops: [], todayDay: null };

    console.log(shops);

    const movePage = useNavigate();

    function goDetail(shopId) {
        movePage(`/category/${category}/${shopId}`, { state: { shops, todayDay } });
    }

    return (
        <div>

            <div className='container-grid'>
                {shops && shops.length > 0 ? (
                        shops.map((shop, index) => (
                            <div key={index} onClick={() => goDetail(shop.id)}>
                                <ShopCard shop={shop} todayDay={todayDay} />
                            </div>
                        ))
                    ) : (
                        <p>정보가 없습니다.</p>
                    )}
            </div>

        </div>
    )
}

export default Category;