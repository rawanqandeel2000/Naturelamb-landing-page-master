import React from "react";
import './categories.css';
import Navb from "../Navbar/navbar";

let blk = 'images/products/slide1.png';
let imginner = 'images/products/slide2.png';
const Categories = () => {
    return ( 
<div className="categories">
    <Navb/>
    <div className="row">
        <div className="col-sm-3  propuct">
          
            <div className="box">
            <ul className="color-cir">
                   <li className="black"><span class="material-symbols-outlined">radio_button_checked</span></li>
                    <li className="brown"><span class="material-symbols-outlined">radio_button_checked</span></li>
                    <li className="blue"><span class="material-symbols-outlined">radio_button_checked</span></li>  
                 </ul>
                 <img  src={blk} alt="" className="img-product"/>
            </div>
            <div className="inner-box">
             <span className="text-inner">Boogly Chair</span>
              <span className="span-inner">$128</span>
                 <div className=""><span class="material-symbols-outlined">grade</span>407</div>
                 <h4 className="text-inner2">Similar Products</h4>
                 <ul className="list-item">
                    <li ><img src={imginner} className="similer-product"/></li>
                    <li><img src={imginner} className="similer-product"/></li>
                    <li><img src={imginner} className="similer-product"/></li>    
                    <li><img src={imginner} className="similer-product"/></li>                 
                 </ul>
             </div>
            </div>

            <div className="col-sm-3  propuct">
            <div className="but-de">
            <a href = "" className="span"><span class="material-symbols-outlined">arrow_back_ios</span>
            <span className="text-de"> Poduct Details</span></a>
            </div>
            <div className="box">
            <ul className="color-cir">
                   <li className="black"><span class="material-symbols-outlined">radio_button_checked</span></li>
                    <li className="brown"><span class="material-symbols-outlined">radio_button_checked</span></li>
                    <li className="blue"><span class="material-symbols-outlined">radio_button_checked</span></li>  
                 </ul>
                 <img  src={blk} alt="" className="img-product"/>
            </div>
            <div className="inner-box">
             <span className="text-inner">Boogly Chair</span>
              <span className="span-inner">$128</span>
                 <div className=""><span class="material-symbols-outlined">grade</span>407</div>
                 <h4 className="text-inner2">Similar Products</h4>
                 <ul className="list-item">
                    <li ><img src={imginner} className="similer-product"/></li>
                    <li><img src={imginner} className="similer-product"/></li>
                    <li><img src={imginner} className="similer-product"/></li>    
                    <li><img src={imginner} className="similer-product"/></li>                 
                 </ul>
             </div>
            </div>
            <div className="col-sm-3  propuct">
            <div className="but-de">
            <a href = "" className="span"><span class="material-symbols-outlined">arrow_back_ios</span>
            <span className="text-de"> Poduct Details</span></a>
            </div>
            <div className="box">
            <ul className="color-cir">
                   <li className="black"><span class="material-symbols-outlined">radio_button_checked</span></li>
                    <li className="brown"><span class="material-symbols-outlined">radio_button_checked</span></li>
                    <li className="blue"><span class="material-symbols-outlined">radio_button_checked</span></li>  
                 </ul>
                 <img  src={blk} alt="" className="img-product"/>
            </div>
            <div className="inner-box">
             <span className="text-inner">Boogly Chair</span>
              <span className="span-inner">$128</span>
                 <div className=""><span class="material-symbols-outlined">grade</span>407</div>
                 <h4 className="text-inner2">Similar Products</h4>
                 <ul className="list-item">
                    <li ><img src={imginner} className="similer-product"/></li>
                    <li><img src={imginner} className="similer-product"/></li>
                    <li><img src={imginner} className="similer-product"/></li>    
                    <li><img src={imginner} className="similer-product"/></li>                 
                 </ul>
             </div>
            </div>

        
            
        </div>
    </div>
    

     );
}
 
export default Categories;