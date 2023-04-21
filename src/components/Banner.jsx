import React from 'react';
import BannerStyle from './Banner.module.css'

function Banner() {
    return (
        <section className={BannerStyle.section}>
            <div className={BannerStyle.div}>
            </div>
            <div className={BannerStyle.title}>
                <h2 className={BannerStyle.h2}>Fashion is instant language</h2>
                <p className={BannerStyle.p}>Delete the negative, accentuate the positive</p>
            </div>
        </section>
    );
}

export default Banner;