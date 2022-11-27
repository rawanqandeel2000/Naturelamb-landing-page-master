import * as React from 'react';




import './services.homepage.style.css';

let maps = 'images/home/maps.png';
let envelope = 'images/home/envelope-open.png';
let male = 'images/home/male-employee.png';
let web = 'images/home/web-service.png';




export default function ServiceHome() {
    return (
    <div className = "service-page">
      <div className = "servers">
        <h1 className='services-word'>Services</h1>
        <p className='services-description'>
          Garcia 1880 provides you with the best solutions to improve the daily lives of
          our elderly and people with mobility problems
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className='box-item'>
            <img src={maps} alt=""/>
            <h1 className='box-title'>Extensive Catalog</h1>
            <p className='box-description'>Our catalogue of walking sticks and sanitary
              technical aids has more than 1000 references. We are constantly working to keep
              you updated, so please visit our website to stay up-to-date with news.</p>
          </div>
          <div className='box-item'>
            <img src={envelope} alt=""/>
            <h1 className='box-title'>No minimum order quantity</h1>
            <p className='box-description'>Order just what you need anytime you need it. You
              can place your orders at any time via our orders email address or via your
              client account. If you have any questions, our team will help</p>
          </div>
          <div className='box-item'>
            <img src={envelope} alt=""/>
            <h1 className='box-title'>After sales service</h1>
            <p className='box-description'>Nothing lasts forever, that’s why we have
              accessories and spare parts for our products, whether they are a bathroom aid,
              mobility product or daily life item. You can find them in your customer area, in
              the spare parts section. We understand the importance of keeping your product in
              good condition to avoid future problems.</p>
          </div>

        </div>
        <div className="col-sm-6">
          <div className='box-item'>
            <img src={male} alt=""/>
            <h1 className='box-title'>Client Zone</h1>
            <p className='box-description'>Access your account to place orders, download our
              catalogues, check prices, etc. If you would like to register, send us an email
              and we will send you username and password.</p>
          </div>
          <div className='box-item'>
            <img src={web} alt=""/>
            <h1 className='box-title'>Customer Service</h1>
            <p className='box-description'>We offer uninterrupted service Monday to Friday,
              from 8:30 a.m. to 7:30 p.m. You can contact us by phone, email or write us
              through our the contact form</p>
          </div>
          <div className='box-item'>
            <img src={web} alt=""/>
            <h1 className='box-title'>Two-year guarantee</h1>
            <p className='box-description'>All our products have a two-year guarantee which
              covers any manufacturing defect. The guarantee includes repair, replacement and
              /or exchange of the product. As long as it is verified that the defect is
              covered by the guarantee, the transportation costs will be free.</p>
          </div>
        </div>

        <div className='box-itemfinal'>
          <img src={envelope} alt=""/>
          <h1 className='box-title'>Returns Policy</h1>
          <p className='box-description' style={{width: 500}}>All our clients have a 6-month period from the
            date of the invoice to return the item. Please note that the item must be in its
            original packaging.</p>
        </div>

      </div>

    </div>
  );
}

