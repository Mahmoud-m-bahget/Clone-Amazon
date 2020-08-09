import React from 'react'
import Product from "./Product"
import "./Home.css";

function Home() {
    return (
        <div className='home'>
            <img className="home_img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=" "/>
            <div className= 'home_row'>
                <Product
                    id = '123456'
                    title = 'Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver'
                    price = {349.99}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg'
                />
                 <Product
                    id = '1654321'
                    title = 'Acer Chromebook Spin 11 CP311-1H-C5PN Convertible Laptop, Celeron N3350, 11.6" HD Touch, 4GB DDR4, 32GB eMMC, Google Chrome'
                    price = {469.99}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/71c6BO65hAL._AC_SL1500_.jpg'
                />
            </div>
            <div className= 'home_row'>
                <Product
                    id = '789012'
                    title = 'Oculus Rift S PC-Powered VR Gaming Headset'
                    price = {399.00}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg'
                />
                 <Product
                    id = '127890'
                    title = 'Amazon Echo (2nd Gen) - Powered by Dolby – White'
                    price = {700}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/61UnzwX%2B4NL._SX466_.jpg'
                />
                 <Product
                    id = '748950'
                    title = 'PlayStation 4 Pro 1TB Console'
                    price = {399.99}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg'
                />
            </div>
            <div className= 'home_row'>
                <Product
                    id = '09736465'
                    title = 'Toshiba TF-32A710U21 32-inch Smart HD TV - Fire TV Edition'
                    price = {139.99}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/614bao-CmtL._AC_SL1000_.jpg'
                />
            </div>
        </div>
    )
}

export default Home
