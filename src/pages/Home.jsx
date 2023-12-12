import MyCarousel from "../components/MyCarousel";

const Home = () => {
    const bannerList = [
        { image: 'src/assets/banner-1.jpg', altText: 'Banner 1'},
        { image: 'src/assets/banner-2.jpg', altText: 'Banner 1'},
        { image: 'src/assets/banner-3.jpg', altText: 'Banner 1'},
    ];

    return (
        <div className="mt-16">
            <MyCarousel items={bannerList} />
        </div>
    )
}

export default Home;