import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import { FaQuoteRight } from 'react-icons/fa';
import './Carousel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination, A11y]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="slide">
        <div className="slide__card">
          <span className="slide__card--marking">
            <FaQuoteRight />
          </span>
          <p className="slide__card--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem purus
            bibendum rhoncus ut tortor etiam turpis. Vitae varius nunc, pulvinar
            elementum. Sed sit euismod dui id velit eu amet accumsan blandit.
            Posuere ac sed gravida nibh tristique elit volutpat ac. Vulputate
            mauris hac eget ipsum. In id gravida laoreet in aliquet.
          </p>
          <div className="slide__card--identification">
            <span className="slide__card--photo"></span>
            <p className="slide__card--name">Thiago França</p>
            <p className="slide__card--date">Jac J3 2013</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="slide__card">
          <span className="slide__card--marking">
            <FaQuoteRight />
          </span>
          <p className="slide__card--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            egestas aliquam sed gravida eget sit cursus. Nec mi vestibulum et,
            velit, interdum vitae. Nec non tellus et scelerisque donec. Faucibus
            volutpat suscipit consectetur quam egestas in posuere leo nibh.
            Metus malesuada.
          </p>
          <div>
            <span className="slide__card--photo"></span>
            <p className="slide__card--name">André Miranda Souza</p>
            <p className="slide__card--date">Corsa 1999 e Fox 2008</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="slide__card">
          <span className="slide__card--marking">
            <FaQuoteRight />
          </span>
          <p className="slide__card--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel est,
            neque, facilisis et et diam sit. Scelerisque diam lorem consectetur
            elementum. Facilisis id massa aliquam vulputate accumsan massa. Quam
            diam malesuada quam non commodo risus. Praesent condimentum nec
            rhoncus id.
          </p>
          <div>
            <span className="slide__card--photo"></span>
            <p className="slide__card--name">Paula Fernandes</p>
            <p className="slide__card--date">Celta 2011</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">Slide 4</SwiperSlide>
      <SwiperSlide className="slide">Slide 5</SwiperSlide>
      <SwiperSlide className="slide">Slide 6</SwiperSlide>
      <SwiperSlide className="slide">Slide 7</SwiperSlide>
    </Swiper>
  );
};
export default Carousel;
