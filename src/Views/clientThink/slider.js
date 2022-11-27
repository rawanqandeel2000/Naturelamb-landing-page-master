
    import React, { useState } from 'react';
    import Carousel from 'react-bootstrap/Carousel';
    



   let imge = 'images/aboutUs/headp.png';
const Slidepager = () => {
 
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return ( 
<div className='page'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className='pag'>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata..</p>
          <h6>Los Angeles</h6>
      </div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div className='pag'>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata..</p>
          <h6>Los Angeles</h6>
      </div>
      
      </Carousel.Item>
      <Carousel.Item>
     
      <div className='pag'>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata..</p>
          <h6>Los Angeles</h6>
      </div>
       
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slidepager;