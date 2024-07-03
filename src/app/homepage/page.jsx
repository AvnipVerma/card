"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import icon from '@/app/assets/image.png';
import styles from "./card.module.css";
// import { IonIcon } from 'react-ionicons';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




function Page() {




  return (
    <div>
      <section id="trending">
        <div className={styles.container}>
          <h3 className={`${styles.textCenter} ${styles.sectionSubheading}`}>--Best Shoes--</h3>
          <h4 className={`${styles.textCenter} ${styles.sectionSubheading}`}>Made by Shubham Mehta</h4>
          <h1 className={`${styles.textCenter} ${styles.sectionHeading}`}>Trending Shoes</h1>
        </div>
        <div className={styles.container}>
        <div className={`${styles.swiper}  ${styles.trendingslider}`}>

            <div className={styles.swiperwrapper}>

            <div className={`${styles.swiperSlide} ${styles.trendingslide}`}>

                <div className={styles.trendingslideimg}>
                  <div className={styles.imageoverlay}></div>
                  <Image src={icon} alt="" 
                  className={styles.imagestyle}/>
                 </div>
                <div className={styles.trendingslidecontent}>
                  <div className={styles.shoeprice}>$125</div>
                  <div className={styles.trendingslidecontentbottom}>
                    <h2 className={styles.shoename}>
                      Nike Jordans
                    </h2>
                    <h3 className={styles.shoerating}>
                      <span>4.5</span>
                      {/* <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star-half"></IonIcon> */}
                    </h3>
                  </div>
                </div>
               
              </div>

            <div className={`${styles.swiperSlide} ${styles.trendingslide}`}>

                <div className={styles.trendingslideimg}>
                  <div className={styles.imageoverlay}></div>
                  <Image src={icon} alt="" 
                  className={styles.imagestyle}/>
                 </div>
                <div className={styles.trendingslidecontent}>
                  <div className={styles.shoeprice}>$125</div>
                  <div className={styles.trendingslidecontentbottom}>
                    <h2 className={styles.shoename}>
                      Nike Jordans
                    </h2>
                    <h3 className={styles.shoerating}>
                      <span>4.5</span>
                      {/* <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star-half"></IonIcon> */}
                    </h3>
                  </div>
                </div>
               
              </div>

            <div className={`${styles.swiperSlide} ${styles.trendingslide}`}>

                <div className={styles.trendingslideimg}>
                  <div className={styles.imageoverlay}></div>
                  <Image src={icon} alt="" 
                  className={styles.imagestyle}/>
                 </div>
                <div className={styles.trendingslidecontent}>
                  <div className={styles.shoeprice}>$125</div>
                  <div className={styles.trendingslidecontentbottom}>
                    <h2 className={styles.shoename}>
                      Nike Jordans
                    </h2>
                    <h3 className={styles.shoerating}>
                      <span>4.5</span>
                      {/* <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star-half"></IonIcon> */}
                    </h3>
                  </div>
                </div>
               
              </div>

            <div className={`${styles.swiperSlide} ${styles.trendingslide}`}>

                <div className={styles.trendingslideimg}>
                  <div className={styles.imageoverlay}></div>
                  <Image src={icon} alt="" 
                  className={styles.imagestyle}/>
                 </div>
                <div className={styles.trendingslidecontent}>
                  <div className={styles.shoeprice}>$125</div>
                  <div className={styles.trendingslidecontentbottom}>
                    <h2 className={styles.shoename}>
                      Nike Jordans
                    </h2>
                    <h3 className={styles.shoerating}>
                      <span>4.5</span>
                      {/* <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star-half"></IonIcon> */}
                    </h3>
                  </div>
                </div>
               
              </div>

            <div className={`${styles.swiperSlide} ${styles.trendingslide}`}>

                <div className={styles.trendingslideimg}>
                  <div className={styles.imageoverlay}></div>
                  <Image src={icon} alt="" 
                  className={styles.imagestyle}/>
                 </div>
                <div className={styles.trendingslidecontent}>
                  <div className={styles.shoeprice}>$125</div>
                  <div className={styles.trendingslidecontentbottom}>
                    <h2 className={styles.shoename}>
                      Nike Jordans
                    </h2>
                    <h3 className={styles.shoerating}>
                      <span>4.5</span>
                      {/* <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star-half"></IonIcon> */}
                    </h3>
                  </div>
                </div>
               
              </div>

            <div className={`${styles.swiperSlide} ${styles.trendingslide}`}>

                <div className={styles.trendingslideimg}>
                  <div className={styles.imageoverlay}></div>
                  <Image src={icon} alt="" 
                  className={styles.imagestyle}/>
                 </div>
                <div className={styles.trendingslidecontent}>
                  <div className={styles.shoeprice}>$125</div>
                  <div className={styles.trendingslidecontentbottom}>
                    <h2 className={styles.shoename}>
                      Nike Jordans
                    </h2>
                    <h3 className={styles.shoerating}>
                      <span>4.5</span>
                      {/* <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star-half"></IonIcon> */}
                    </h3>
                  </div>
                </div>
               
              </div>

            <div className={`${styles.swiperSlide} ${styles.trendingslide}`}>

                <div className={styles.trendingslideimg}>
                  <div className={styles.imageoverlay}></div>
                  <Image src={icon} alt="" 
                  className={styles.imagestyle}/>
                 </div>
                <div className={styles.trendingslidecontent}>
                  <div className={styles.shoeprice}>$125</div>
                  <div className={styles.trendingslidecontentbottom}>
                    <h2 className={styles.shoename}>
                      Nike Jordans
                    </h2>
                    <h3 className={styles.shoerating}>
                      <span>4.5</span>
                      {/* <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star-half"></IonIcon> */}
                    </h3>
                  </div>
                </div>
               
              </div>

            <div className={`${styles.swiperSlide} ${styles.trendingslide}`}>

                <div className={styles.trendingslideimg}>
                  <div className={styles.imageoverlay}></div>
                  <Image src={icon} alt="" 
                  className={styles.imagestyle}/>
                 </div>
                <div className={styles.trendingslidecontent}>
                  <div className={styles.shoeprice}>$125</div>
                  <div className={styles.trendingslidecontentbottom}>
                    <h2 className={styles.shoename}>
                      Nike Jordans
                    </h2>
                    <h3 className={styles.shoerating}>
                      <span>4.5</span>
                      {/* <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star-half"></IonIcon> */}
                    </h3>
                  </div>
                </div>
               
              </div>



              

            </div>

            <div className={styles.trendingslidercontrol}>

            <div className={`${styles.swiperButtonPrev} ${styles.sliderArrow}`}>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className={`${styles.swiperButtonNext} ${styles.sliderArrow}`}>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>

              <div className={styles.swiperpagination}></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Page;
