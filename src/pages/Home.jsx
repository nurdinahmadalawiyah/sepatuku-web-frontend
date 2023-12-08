import Carousel from "../components/Home/Carousel"

const Home = () => {
    const bannerList = [
        'src/assets/banner-1.jpg',
        'src/assets/banner-2.jpg',
        'src/assets/banner-3.jpg',
    ];

    return (
        <div>
            <Carousel bannerList={bannerList} />
        </div>
    )
}

export default Home;