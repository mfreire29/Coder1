import React from 'react'
import Slider from "react-slick";


function SliderCategorias() {
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              infinite: true,
            }
          }
        ]
      };
    

    return (
        <div className="contenedor-slider">
            <Slider {...settings}>
            <div>
                <img src="https://www.bief.com.ar/tlv/2.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/3.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/4.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/5.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/6.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/4.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/2.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/3.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/4.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/5.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/6.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/4.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/2.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/3.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/4.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/5.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/6.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            <div>
                <img src="https://www.bief.com.ar/tlv/4.jpeg" className="img-fluid slider" />
                <p className="cat-slider">Categoría 1</p>
            </div>
            </Slider>    
        </div>
    )
}

export default SliderCategorias
