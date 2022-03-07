import React,{useState,useEffect} from 'react';
import '../App';

import axios from 'axios';
const Content = () => {
    
    const [data,setData] = useState([]);
        

    useEffect(()=>{
        axios({
            method:"GET",
            url:`https://www.scorebat.com/video-api/v3/feed/?token=MTQ4OTVfMTY0NjU2OTEwOF83NjJkNWIxNGUzMmEyZTAyODBjNDBmNjVjMDQ2ZGY5MWUzNWIyNjk5`
        }).then(res=>{
            console.log(res.data);
            setData(res.data.response);

        }).catch(e=>console.log(e))
    },[]
    )
    return (
        <div className='ContentContainer'>
            {data.map((item)=> (
                    <div className='Divitem' key={item.title}
                        onClick={() => window.open(item.matchviewUrl)}>
                        <div className='heading'><h4>{item.title}</h4></div>
                        <div className='details'>
                            <img src={item.thumbnail} alt="#"/></div>
                    </div>
            ))}
            </div>
    );

    

    
}



export default Content
