import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative ">
        <div  className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
     <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
     >
       
       <div>
         <img loading="lazy " src="https://m.media-amazon.com/images/I/61tk4B-Bx+L._SX3000_.jpg" alt=""/>
       </div>
       <div>
         <img loading="lazy " src="https://m.media-amazon.com/images/I/61SQdbfLDgL._SX3000_.jpg" alt=""/>
       </div>

       <div className=" w-400 h-400 ">
          <img loading="lazy " src="https://m.media-amazon.com/images/I/71pXNDf3rZL._SX3000_.jpg" alt=""/>
       </div>
       
       <div>
          <img loading="lazy " src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" alt=""/>
       </div>

       <div>
          <img loading="lazy " src="https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg" alt=""/>
       </div>

       <div>
          <img loading="lazy " src="https://m.media-amazon.com/images/I/6146Q6tSFdL._SX3000_.jpg" alt=""/>
       </div>
       
       <div>
          <img loading="lazy " src="https://m.media-amazon.com/images/I/81fl-uN9kOL._SX3000_.jpg" alt=""/>
       </div>
       
       <div>
          <img loading="lazy " src="https://m.media-amazon.com/images/I/61JwucDh7IL._SX3000_.jpg" alt=""/>
       </div>
        </Carousel>
    </div>
  );
}

export default Banner;