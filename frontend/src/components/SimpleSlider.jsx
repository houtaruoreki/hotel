import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";
import image from "/Images/image.png";
import springImage from "/Images/image 8.png";
import autumnImage from "/Images/image 14.png";
import winterImage from "/Images/image 15.png";
export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="p-0">
      <Slider {...settings}>
        <div>
          <img src={springImage} alt="spring" />
        </div>
        <div>
          <img src={autumnImage} alt="autumn" />
        </div>
        <div>
          <img src={winterImage} alt="winter" />
        </div>
      </Slider>
    </div>
  );
}
