import React from 'react'
import freshimg from '../assets/freshimg.png'
import freshimg2 from '../assets/freshimg1.png'


const Home = () => {
    const setting ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  
                },
            },
        ],

    };
  return (
    <div className='container'>
        <slider >
       <img src={freshimg} alt="" />
       <img src={freshimg2} alt="" />
       </slider>
    </div>
  )
}

export default Home