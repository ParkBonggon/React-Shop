import React from 'react';
import BannerStyle from './Banner.module.css'

function Main() {
    return (
        <main className={BannerStyle.main}>
            <p className={BannerStyle.ment}>Discover a variety of products</p>
        </main>
    );
}

export default Main;