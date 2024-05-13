import React from 'react'
import SliderItem from './SliderItem';

import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

import styles from "./index.module.scss";


const SliderComponent = () => {

  const sliderContent = [
    {
      id: 1,
      img: "/carretImg (1).jpg",
      text:"",
    },
    {
      id: 2,
      img: "/carretImg (2).jpg",
      text:"",
    },
    {
      id: 4,
      img: "/carretImg (3).jpg",
      text:"",
    },
    {
      id: 3,
      img: "/carretImg (4).jpg",
      text:"",
    },
    {
      id: 5,
      img: "/carretImg (5).jpg",
      text:"",
    },
  ];

  return (
    <div className={styles.carret}>

      <AliceCarousel 
        autoPlay 
        infinite
        autoPlayInterval={2500}
        animationDuration={1000}
        disableButtonsControls
      >
        {
          sliderContent.map((item,i) => (
            <SliderItem {...item} key={item?.id} />
          ))
        }
      </AliceCarousel>
    </div>
  )
}

export default SliderComponent;
