import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const CustomCard = ({ title, price, actualPrice, discount, rating, sold, img }) => {
  return (
    <Card shadow="sm" isPressable>
      <CardBody className="overflow-visible p-0">
        <Image
          radius="none"
          alt={title}
          src={img}
        />
      </CardBody>
      <CardFooter className="pb-2 pt-2 px-4 flex-col items-start">
        <p className="text-lg font-medium text-secondary">{title}</p>
        <p className="text-lg font-bold">Rp. {price} </p>
        <div className="flex justify-center items-center">
          <p className="text-sm line-through text-zinc-400 pr-2">Rp. {actualPrice} </p>
          <p className="text-sm font-bold text-danger">{discount}% off</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-sm text-zinc-400 pr-2"> <FontAwesomeIcon className="text-yellow-500" icon={faStar} /> {rating}</p>
          <p className="text-sm text-zinc-500 pr-2"> | </p>
          <p className="text-sm text-zinc-500">{sold} Terjual</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
