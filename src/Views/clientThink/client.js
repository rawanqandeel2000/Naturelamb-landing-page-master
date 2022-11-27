import * as React from 'react';




import './client.css';
import Slidepager from './slider';
import Slider from './slider';





let Ov = 'images/aboutUs/Ov.png';
let Ova = 'images/aboutUs/Ova.png';
let woman = 'images/aboutUs/woman.png';
let pinkman = 'images/aboutUs/pink-man.png';
let pic = 'images/aboutUs/pic.png';
let OOMG = 'images/aboutUs/O.png';
let rectangle = 'images/aboutUs/Rectangle.png';






const ClientPage = () => {
  return (

    <div className="client-page">
      <div className="row">
        <div className="col-sm-3">
          <img src={pinkman} alt="" className='img1'/>
          <img src={Ova} alt="" className='img2'/>
          <img src={Ov} alt=""  className='img3'/>

        </div>
        <div className="col-sm-6">
            <div className="center-page ">
        <img src={rectangle} alt="" className='imgcenter'/>
           <h1 className="title">Whats Our Client Think<br /><span className='span'>About Us.</span> </h1>
           <div>
           <Slidepager />
          </div>
          </div>
        </div>
        <div className="col-sm-3">
          <img src={woman} alt="" className='img4'/>
          <img src={pic} alt="" className='img5'/>
          <img src={OOMG} alt="" className='img6'/>

        </div>
      </div>

    </div>
  );
}

export default ClientPage;