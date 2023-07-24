import Academics from "../Academics/Academics";
import Administration from "../Administration/Administration";
import Banner from "../Banner/Banner";
import College from "../College/College";
import FeedBack from "../FeedBack/FeedBack";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Administration></Administration>
           <Academics></Academics>
           <College></College>
           <ResearchPaper></ResearchPaper>
           <FeedBack></FeedBack>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;