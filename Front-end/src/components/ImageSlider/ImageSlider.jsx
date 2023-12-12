//import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'
import img2 from '../../assets/images/img slider/img2.jpg'
import img3 from '../../assets/images/img slider/img3.jpg'


function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                        className="full-height-cover"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Discover the World Between the Pages</h3>
                        <p>Books hold the power to enlighten, entertain, and inspire. Dive into their embrace and embark on limitless journeys.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="full-height-cover"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Where Knowledge Unfolds</h3>
                        <p>PBooks, the timeless gateway to imagination and wisdom, await to transport you to new worlds and expand your horizons.</p>
                    </Carousel.Caption>
                </Carousel.Item> 
            </Carousel>
        </div>
    )
}

export default ImageSlider
