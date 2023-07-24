import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/cheerful-indian-asian-young-group-college-students-friends-walking-campus-corridor-stairs_466689-8622.avif'
import image2 from '../../assets/graduation-concept-with-students-holding-blank-certificate-template_23-2148201847.avif'
import image3 from '../../assets/people-technology-education.avif'
import image4 from '../../assets/smiling-students-with-backpacks_1098-1220.avif'
const Banner = () => {
    return (
        <Carousel className="">
        <div>
            <img src={image1} />
        </div>
        <div>
            <img src={image2} />
        </div>
        <div>
            <img src={image3} />
        </div>
        <div>
            <img src={image4} />
        </div>
    </Carousel>
    );
};

export default Banner;