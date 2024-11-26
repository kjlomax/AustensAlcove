import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Carousel.css';


const carouselData = [
  { id: 1, title: 'A Court of Silver Flames', image: '/assets/GIBBERISH.jpg' },
  { id: 2, title: 'Beyonders', image: '/assets/beyonders.jpg' },
  { id: 3, title: 'Slaughterhouse 5', image: '/assets/slaughterhouse.jpg' },
  { id: 4, title: 'Dear Black Girls', image: '/assets/aja.jpg' },
  { id: 5, title: 'Pride & Prejudice', image: '/assets/pride.jpg' }
];

const CarouselComp = () => {
  const [focusedIndex, setFocusedIndex] = useState(2); // Start with the middle book as focused

  const settings = {
    dots: true,
    infinite: false, // No repeating
    speed: 500,
    slidesToShow: 5, // Show 5 books at a time
    slidesToScroll: 1,
    centerMode: true, // Center the middle book
    focusOnSelect: true, // Focus on the selected book
    beforeChange: (current: number, next: number) => setFocusedIndex(next), // Set focused book when changing
    arrows: true, // Show arrows
  };

  return (

    <Carousel>
     {carouselData.map((item) => (
        <Carousel.Item key={item.id} >
          <img src={item.image} alt={item.title} className='carousel-image'/>
        </Carousel.Item>
        ))}
    </Carousel>
  );
};


export default CarouselComp;
