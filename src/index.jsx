import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './SCSS/index.scss';

export default function Main() {

    const [shops, setShops] = useState();
    const movePage = useNavigate();

    useEffect(() => {
        axios.get("https://api.stage.koreatech.in/shops")
            .then(res => {
                console.log(res.data);
                setShops(res.data?.shops);
            })
            .catch(err => console.log(err));
            axios.get("https://api.stage.koreatech.in/shops/155")
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
        }, []);

    function getToday(){
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);
    
        return year + "-" + month + "-" + day;
    }

    let todayDate = getToday(); // 오늘 날짜

    function getDayofWeek(todayDate) {
        let dayOfWeek = new Date().getDay();

        if (dayOfWeek === 0) {
            dayOfWeek = 6
        }
        else {
            dayOfWeek -= 1
        }
        
        // 0:월, 1:화, 2:수, 3:목, 4:금, 5:토, 6:일
        return dayOfWeek;
    }

    
    let todayDay = getDayofWeek(); // 오늘 요일

    let allShops = shops && shops.filter(e => e.category_ids[0] === 1);
    let chickenShops = shops && shops.filter(e => e.category_ids[1] === 2);
    let pizzaShops = shops && shops.filter(e => e.category_ids[1] === 3);

    function goAll() {
        movePage('/category/all', { state: { shops: allShops, todayDay } });
    }

    function goChicken() {
        movePage('/category/chicken', { state: { shops: chickenShops, todayDay } });
    }

    function goPizza() {
        movePage('/category/pizza', { state: { shops: pizzaShops, todayDay } });
    }

    return (
        <div>

            <div className='category-nearShop'>주변상점</div>
            <div className='division-line-top'></div>

            <div className='container'>
                <span className='all' onClick={goAll}></span>
                <span className='chicken' onClick={goChicken}></span>
                <span className='pizza' onClick={goPizza}></span>
            </div>

            <div className='division-line-bottom'></div>
        </div>
    )
}