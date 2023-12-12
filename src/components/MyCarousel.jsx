import { Carousel } from "primereact/carousel";
import { Image } from "@nextui-org/react";
import "primereact/resources/primereact.min.css";

const MyCarousel = ({ items }) => {
  const itemTemplate = (item) => {
    return (
      <div className="carousel-item">
        <Image src={item.image} alt={item.altText} />
      </div>
    );
  };

  return (
    <div>
      <Carousel
        value={items}
        itemTemplate={itemTemplate}
        numVisible={1}
        numScroll={1}
        style={{
          width: "100%",
          height: "100vh",
        }}
        autoplayInterval={5000}
        showNavigators={false}
      />
    </div>
  );
};

export default MyCarousel;
