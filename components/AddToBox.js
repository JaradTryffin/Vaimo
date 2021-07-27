import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import info from '../Images/info.png'
import mail from '../Images/mail.png'
import { useSelector } from "react-redux"

function AddToBox( {products} ) {
    // const grandTotal = ((box1Value * products.product.options.['1080p'].price.value)+(box2Value * products.product.options.['4k'].price.value) + (box3Value + products.product.options.battery_accessories.price.value))
    const [totalPrice,setTotalPrice] = useState(0)
    let box1Value = useSelector((state) => state.counter.value)
    let price1080p = products.product.options['1080p'].price.value

    let box2Value = useSelector((state) => state.boxtwo.value)
    let price4k = products.product.options['4k'].price.value

    let box3Value = useSelector((state) => state.boxthree.value)
    let price_battery = products.product.options.battery_accessories.price.value

    
    useEffect(() => {
        setTotalPrice((box1Value * price1080p) + (box2Value * price4k) + (box3Value * price_battery))
        
    })
    return (
        <div className="main__footer">
            <div className="footer">
                <div className="footer__shipping">
                    <p className="clamp">{products.product.shipping.method.shipping_time.info}</p>
                    <p>Lead Time {products.product.shipping.lead_time.value} <span><Image width={20} height={19} src={info}/></span> </p>
                    <p>Shipping Time {products.product.shipping.method.shipping_time.value}<span><Image width={20} height={19} src={info}/></span> </p>
                </div>
            <p className="total">R{totalPrice.toFixed(2)}</p>
            
            </div>
            <div className="btn">
                <a className="btn__login" href="#">Login to Purchase</a>
                <a className="btn__contact" href="#"><span><Image width={19} height={16} src={mail}/></span> Contact the supplier</a>
            </div>
            
        </div>
        
    )
}

export default AddToBox
