import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-fade";
import "swiper/scss/pagination"
import styles from "./Slider.module.scss"
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";

interface Props {
    products?: boolean
}

const Slider: React.FC<Props> = ({products}) => {
    return (
        <div className={styles.container}>
            <Swiper
                modules={[Navigation, EffectFade, Pagination, Autoplay]}
                navigation
                effect="fade"
                speed={1500}
                autoplay={{delay: 4000}}
                slidesPerView={1}
                pagination={{clickable: true}}
                loop
                className={styles.myswiper}
            >
                {products ? (
                        <>
                            <SwiperSlide className={styles.swiperslide}>
                                <div className={styles.textwrapper}>
                                    <h3>The new phones are here take a look.</h3>
                                    <p>Large selection of phones from various brands. At reasonable prices. Buy right now and get
                                        3000 points on your next purchase!</p>
                                </div>
                                <div className={styles.imgwrapper4}></div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.swiperslide}>
                                <div className={styles.textwrapper}>
                                    <h3>Break the boundaries of productivity with the Lenovo ThinkPad.</h3>
                                    <p>Subscribe to our newsletter and be the first to know about new products and special offers.</p>
                                </div>
                                <div className={styles.imgwrapper5}></div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.swiperslide}>
                                <div className={styles.textwrapper}>
                                    <h3>Meet Apple Watch the biggest display.</h3>
                                    <p>With a large and advanced always-on Retina display, using Apple Watch Series 7 is incredibly convenient.</p>
                                </div>
                                <div className={styles.imgwrapper6}></div>
                            </SwiperSlide>
                        </>
                ) : (
                    <>
                        <SwiperSlide className={styles.swiperslide}>
                            <div className={styles.textwrapper}>
                                <h3>The new phones are here take a look.</h3>
                                <p>Large selection of phones from various brands. At reasonable prices. Buy right now and get
                                    3000 points on your next purchase!</p>
                            </div>
                            <div className={styles.imgwrapper1}></div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperslide}>
                            <div className={styles.textwrapper}>
                                <h3>Break the boundaries of productivity with the Lenovo ThinkPad.</h3>
                                <p>Subscribe to our newsletter and be the first to know about new products and special offers.</p>
                            </div>
                            <div className={styles.imgwrapper2}></div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperslide}>
                            <div className={styles.textwrapper}>
                                <h3>Meet Apple Watch the biggest display.</h3>
                                <p>With a large and advanced always-on Retina display, using Apple Watch Series 7 is incredibly convenient.</p>
                            </div>
                            <div className={styles.imgwrapper3}></div>
                        </SwiperSlide>
                    </>
                )}

            </Swiper>
        </div>
    );
};

export default Slider;