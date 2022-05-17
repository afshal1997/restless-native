import React from "react";
import HomePageSection4 from "../Layout/HomePageLayout/HomePageSection4";
import HomeSection02 from "../Layout/HomePageLayout/HomeSection02";
import HomeSection03 from "../Layout/HomePageLayout/HomeSection03";
import MainSection from "../Layout/HomePageLayout/MainSection";
import Header from "../Components/Common/Header/Header";
import Footer from '../Components/Common/Footer/Footer';
import Gallery from '../Layout/HomePageLayout/Gallery';
import '../Layout/HomePageLayout/home.css';

export default function Home() {
    return (
        <div>
            <Header />
            <MainSection />
            <HomeSection02 />
            <Gallery />
            <HomeSection03 />
            <HomePageSection4 />
            <Footer />
        </div>
    )
}