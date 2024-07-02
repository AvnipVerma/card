"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import icon from '@/app/assets/image.png';
import styles from "./card.module.css";
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Page() {

  
      

  return (
    <div className={styles.containerbig}>
      <section id="trending">
        <div className={styles.container}>
          <h3 className={`${styles.textCenter} ${styles.sectionSubheading}`}>--Best Shoes--</h3>
          <h4 className={`${styles.textCenter} ${styles.sectionSubheading}`}>Made by Shubham Mehta</h4>
          <h1 className={`${styles.textCenter} ${styles.sectionHeading}`}>Trending Shoes</h1>
        </div>
        <div className={styles.container}>
          <div className={`${styles.swiper} trending-slider`}>
            <div className={styles.swiperWrapper}>
              
              <div className={`${styles.swiperSlide} ${styles.trendingSlide}`}>
                <div className={styles.trendingSlideImg}>
                  <div className={styles.imageOverlay}></div>
                  <Image src={icon} alt=""/>
                </div>
                <div className={styles.trendingSlideContent}>
                  <h1 className={styles.shoePrice}>$125</h1>
                  <div className={styles.trendingSlideContentBottom}>
                    <h2 className={styles.shoeName}>
                      Nike Jordans
                    </h2>
                    <h3 className={styles.shoeRating}>
                      <span>4.5</span>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half"></ion-icon>
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.swiperSlide} ${styles.trendingSlide}`}>
                <div className={styles.trendingSlideImg}>
                  <div className={styles.imageOverlay}></div>
                  <Image src={icon} alt=""/>
                </div>
                <div className={styles.trendingSlideContent}>
                  <h1 className={styles.shoePrice}>$125</h1>
                  <div className={styles.trendingSlideContentBottom}>
                    <h2 className={styles.shoeName}>
                      Nike Jordans 2
                    </h2>
                    <h3 className={styles.shoeRating}>
                      <span>4</span>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.swiperSlide} ${styles.trendingSlide}`}>
                <div className={styles.trendingSlideImg}>
                  <div className={styles.imageOverlay}></div>
                  <Image src={icon} alt=""/>
                </div>
                <div className={styles.trendingSlideContent}>
                  <h1 className={styles.shoePrice}>$125</h1>
                  <div className={styles.trendingSlideContentBottom}>
                    <h2 className={styles.shoeName}>
                      Nike Air Max
                    </h2>
                    <h3 className={styles.shoeRating}>
                      <span>4.5</span>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half"></ion-icon>
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.swiperSlide} ${styles.trendingSlide}`}>
                <div className={styles.trendingSlideImg}>
                  <div className={styles.imageOverlay}></div>
                  <Image src={icon} alt=""/>
                </div>
                <div className={styles.trendingSlideContent}>
                  <h1 className={styles.shoePrice}>$125</h1>
                  <div className={styles.trendingSlideContentBottom}>
                    <h2 className={styles.shoeName}>
                      Nike Sports
                    </h2>
                    <h3 className={styles.shoeRating}>
                      <span>3.5</span>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half"></ion-icon>
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.swiperSlide} ${styles.trendingSlide}`}>
                <div className={styles.trendingSlideImg}>
                  <div className={styles.imageOverlay}></div>
                  <Image src={icon} alt=""/>
                </div>
                <div className={styles.trendingSlideContent}>
                  <h1 className={styles.shoePrice}>$125</h1>
                  <div className={styles.trendingSlideContentBottom}>
                    <h2 className={styles.shoeName}>
                      Adidas 
                    </h2>
                    <h3 className={styles.shoeRating}>
                      <span>4.5</span>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half"></ion-icon>
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.swiperSlide} ${styles.trendingSlide}`}>
                <div className={styles.trendingSlideImg}>
                  <div className={styles.imageOverlay}></div>
                  <Image src={icon} alt=""/>
                </div>
                <div className={styles.trendingSlideContent}>
                  <h1 className={styles.shoePrice}>$125</h1>
                  <div className={styles.trendingSlideContentBottom}>
                    <h2 className={styles.shoeName}>
                      Adidas Runners
                    </h2>
                      <h3 className={styles.shoeRating}>
                      <span>3.5</span>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half"></ion-icon>
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.swiperSlide} ${styles.trendingSlide}`}>
                <div className={styles.trendingSlideImg}>
                  <div className={styles.imageOverlay}></div>
                  <Image src={icon} alt=""/>
                </div>
                <div className={styles.trendingSlideContent}>
                  <h1 className={styles.shoePrice}>$125</h1>
                  <div className={styles.trendingSlideContentBottom}>
                    <h2 className={styles.shoeName}>
                      Adidas Sneakers
                    </h2>
                    <h3 className={styles.shoeRating}>
                      <span>3</span>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.swiperSlide} ${styles.trendingSlide}`}>
                <div className={styles.trendingSlideImg}>
                  <div className={styles.imageOverlay}></div>
                  <Image src={icon} alt=""/>
                </div>
                <div className={styles.trendingSlideContent}>
                  <h1 className={styles.shoePrice}>$125</h1>
                  <div className={styles.trendingSlideContentBottom}>
                    <h2 className={styles.shoeName}>
                      Adidas 2
                    </h2>
                    <h3 className={styles.shoeRating}>
                      <span>2.5</span>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half"></ion-icon>
                    </h3>
                  </div>
                </div>
              </div>
              
            </div>

            <div className={styles.trendingSliderControl}>
              <div className={`${styles.swiperButtonPrev} ${styles.sliderArrow}`}>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className={`${styles.swiperButtonNext} ${styles.sliderArrow}`}>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className={styles.swiperPagination}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
