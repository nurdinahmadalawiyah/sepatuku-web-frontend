import CustomCard from "../components/CustomCard";
import MyCarousel from "../components/MyCarousel";

const Home = () => {
  const bannerList = [
    { image: "src/assets/banner-1.jpg", altText: "Banner 1" },
    { image: "src/assets/banner-2.jpg", altText: "Banner 1" },
    { image: "src/assets/banner-3.jpg", altText: "Banner 1" },
  ];

  const featuredItem = [
    {
      title: "NIKE WILDHORSE 7",
      price: "1799000",
      actualPrice: "2300000",
      discount: "20",
      rating: "4.5",
      sold: "12",
      img: "src/assets/product/nike-wildhorse-7.png",
    },
    {
      title: "NIKE WILDHORSE 7",
      price: "1799000",
      actualPrice: "2300000",
      discount: "20",
      rating: "4.5",
      sold: "12",
      img: "src/assets/product/nike-react infinity-run-flyknit-2-red.png",
    },
    {
      title: "NIKE WILDHORSE 7",
      price: "1799000",
      actualPrice: "2300000",
      discount: "20",
      rating: "4.5",
      sold: "12",
      img: "src/assets/product/nike-react infinity-run-flyknit-2-blue.png",
    },
  ];

  return (
    <div className="mt-16">
      <section id="banner">
        <MyCarousel items={bannerList} />
      </section>
      <section
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mb-20"
        id="featured"
      >
        <div className="max-w-2xl text-center">
          <div className="flex flex-col md:flex-col items-center justify-center gap-10">
            <h1 className="text-4xl font-bold text-secondary">
              Featured Items
            </h1>
            <h2 className="text-lg font-medium text-secondary">
              Temukan ragam produk pilihan kami, yang dipilih dengan teliti yang
              mengedepankan kualitas, gaya, dan inovasi yang luar biasa.
            </h2>
          </div>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 pt-8">
            {featuredItem.map((item, index) => (
              <CustomCard
                key={index}
                title={item.title}
                price={item.price}
                actualPrice={item.actualPrice}
                discount={item.discount}
                rating={item.rating}
                sold={item.sold}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
