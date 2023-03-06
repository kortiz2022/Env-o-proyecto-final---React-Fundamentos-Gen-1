import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import NewsAllData from "../NewsAllData/NewsAllData";

const NewsData = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(()=>{
        axios.get('https://api-creator-server.vercel.app/news-data')
        .then(function(res){
            setNewsData(res.data)
        })
    },[])

    console.log(newsData)

    return (
        <div className='news__data__main py-8 lg:py-20'>
            <h1 className='text-3x1 lg:text-left text-center lg:text-5x1 font-bold'>New Dta</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                {
                    newsData.map(data => <NewsAllData key={data._id} data={data} ></NewsAllData>)
                }
            </div>
        </div>
    );
};

export default NewsData;