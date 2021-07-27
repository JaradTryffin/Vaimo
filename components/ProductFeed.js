import React from 'react'
import Image from 'next/image';
import tick from "../Images/tick.png"
import star from "../Images/star.png"
import march from "../Images/march_expo.png"
import arrow from "../Images/arrow.png"
import clock from "../Images/Clock.png"
import trade from "../Images/trade.png"
import visa from "../Images/visa.svg"
import master from "../Images/master.svg"
import apple from "../Images/apple.svg"
import TextBoxCount from "../components/TextBoxCount"
import AddToBox from './AddToBox';
import BoxTwo from './BoxTwo';
import BoxThree from './BoxThree';
import Countdown from "react-countdown";

function ProductFeed({ products }) {

    //create an array to allow for loop of stars
    const starValue =parseInt(products.product.reviews.rating);
    const starList = []
    for(var x = 0; x < starValue; x++){
        starList.push(star)
        
    }
    const shippingStatus = products.product.shipping.props.ready_to_ship
    const stockStatus = products.product.shipping.props.in_stock
    const dispatchStatus = products.product.shipping.props.fast_dispatch

    // options
    //Display options in the object

    const countOptions = Object.keys(products.product.options).length;
    
   
    
    return (
        <div className="container">
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <div className="image__box">
                <img src={products.product.gallery["0"].main} alt="" />
            </div>

            {/* infobox */}
            <div className="info__box">

                {/* badges */}

            
                <div className="badges">
                    <div className={shippingStatus == true ? 'badges__ship':'status'} >
                    <p>Ready to Ship</p>

                    </div>
                    
                    <div className={stockStatus == true ? 'badges__stock':'status'}>
                        <Image src={tick} width={16} height={16}/>
                        <p>In Stock</p>
                    </div>
                    <div className={dispatchStatus == true ? 'badges__dispatch':'status'}>
                        <Image className="dispatch__tick" src={tick} width={16} height={16}/>
                        <p>Fast Dispatch</p>
                    </div>

                </div>

                {/* heading */}

                <div className="heading">
                    <p>{products.product.name}</p>
                    <div className="heading__tag">
                        <p>{products.product.tags['0']}</p>
                    </div>
                </div>

                {/* rating */}
                <div className="rating">
                    <div className="rating__star">
                        {/* <div className="star1"><Image width={19} height={19} src={star}/></div>
                        <div className="star1"><Image width={19} height={19} src={star}/></div>
                        <div className="star1"><Image width={19} height={19} src={star}/></div>
                        <div className="star1"><Image width={19} height={19} src={star}/></div>
                        <div className="star1"><Image width={19} height={19} src={star}/></div> */}


                        {/* Loop through Star according to rating */}
                        {starList.map((i) => <div className="star1"><Image src={i} width={19} height={19}/></div>)}
                        
                        <p className="rating__star__score">{products.product.reviews.rating}</p>
                        <p className="rating__star__review">{products.product.reviews.count} Reviews</p>
                        <p className="rating__star__buyers">{products.product.reviews.total_buyers} buyers</p>
                    </div>
                 

                </div>
                

                {/* Pricing */}
                <hr />

                <div className="price">
                    <div class="price__new">
                        <p class="price__new__current">R {products.product.options.battery_accessories.price.value}0 - R {products.product.options['1080p'].price.value}</p>
                        <p class="price__new__old">R {products.product.options.battery_accessories.old_price.value} - R {products.product.options['1080p'].old_price.value}</p>
                    </div>
                    <div class="price__options">
                        <p class="price__options__gray">/ Options</p>
                        {/* <p class='price__options__gray'>|</p> */}
                        <p class="price__option__normal">{countOptions} Options</p>
                        <p class="price__options__gray">(Min order)</p>
                    </div>

                </div>

                <hr />
                

                {/* Advertisement March Expo */}
                <div className="march">
                    <div className="march__icon">
                        <Image width={101} height={53} src={march}/>    
                    </div>
                    <p>•  Free shipping (up to $40)</p>
                    <p className='march__delivery'>•  On-time delivery guaranteed</p>
                    <div className="march__arrow">
                        <Image width={11} height={19} src={arrow}/>
                    </div>
                </div>

                {/* Countdown Timer */}
                <div className="countdown">
                    <div className="countdown__percent">
                        <p className="countdown__percent__color">{products.product.discount.amount} OFF</p>
                        <p className="color__discount">Discount ends in</p>
                    </div>
                    <div className="countdown__timer">
                        <Image className='clock' width={21} height={21} src={clock}/>

                        {/* countDownComponent */}
                        {/* <p>{products.product.discount.end_date}</p> */}
                        <Countdown className='time' date={Date.parse(products.product.discount.end_date)} />
                    </div>
                </div>

                {/* Products */}
                <div className="products">
                    <p className="option">Options:</p>
                    <div className="product__options">
                        <p>{products.product.options['1080p'].label}</p>
                        <p>{products.product.options['4k'].label}</p>
                        <p>{products.product.options.battery_accessories.label}</p>

                    </div>
                    <div className="product__prices">
                        <p>{products.product.options['1080p'].price.value}</p>
                        <p>{products.product.options['4k'].price.value}</p>
                        <p>{products.product.options.battery_accessories.price.value}</p>
                    </div>
                    <div className="product__quantity">
                        <div className="product__quantity__1">
                            {/* TextBox components */}
                            <TextBoxCount/>
                        </div>
                        <div className="product__quantity__2">
                            <BoxTwo/>
                        </div>
                        <div className="product__quantity__3">
                            <BoxThree/>
                        </div>
                        
                        
                    </div>

                    

                </div>

                <div className="trade">
                
                        <Image width={16} height={19} src={trade}/>
            
                    <p><span>Trade Assurance</span> protects your Alibaba.com orders</p>
                    <p></p>
                </div>

                <div className="payments">
                    <p>Payments: </p>
                    <div className="payment__visa">
                        <Image width={23} height={16} src={visa}/>
                    </div>
                    <div className="payment__master">
                        <Image width={23} height={16} src={master}/>
                    </div>
                    <div className="payment__apple">
                        <Image width={37} height={16} src={apple}/>
                    </div>
                </div>

                <div className="links">
                    <a href="#">Alibaba.com Logistics</a>
                    <a className="link__inspec" href="#">Inspection Solutions</a>
                </div>       
              
            </div>

            {/* Add To Box */}
         
            <AddToBox products={products}/>
           
            

    

        </div>
    )
}

export default ProductFeed
