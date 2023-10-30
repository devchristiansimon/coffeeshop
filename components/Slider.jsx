import { Carousel } from "react-bootstrap";
import Image from "next/image";

export default function Slider() {
  return (
    <div>
      <Carousel controls={false} fade={true} intervall={2000}>
        <Carousel.Item>
          <Image
            className="d-block w-100 rounded-3"
            src="/bilder/headerpics/flatcoffee.jpg"
            alt="Cappucino"
            width={3000}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 rounded-3"
            src="/bilder/headerpics/flat2.jpg"
            alt="espresso"
            width={3000}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 rounded-3"
            src="/bilder/headerpics/flat3.jpg"
            alt="bohnen"
            width={3000}
            height={400}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
