import { useEffect, useState } from 'react'
import image from '../assets/texas1.webp'
import image1 from '../assets/texas2.webp'
import image2 from '../assets/texas3.webp'
import image3 from '../assets/texas4.webp'
import image4 from '../assets/texas5.webp'
import image5 from '../assets/texas6.webp'
import image6 from '../assets/texas7.webp'
import image7 from '../assets/texas9.webp'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PhotoTab from './PhotoTab'
// import PhotoGalleryCard from './PhotoGalleryCard'
const PhotoGallery = () => {
    const [categories, setCategories] = useState([])
    const [tabIndex,setTabIndex]=useState(0)
    useEffect(() => {
        fetch('http://localhost:5000/photo')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const teacher=categories.filter(item=>item.category==='teacher')
    const auditorium=categories.filter(item=>item.category==='auditorium')
    const Lab=categories.filter(item=>item.category==='lab')
    const Library=categories.filter(item=>item.category==='library')
    const Convocation=categories.filter(item=>item.category==='convocation')
    return (
        <div >
            <h1 className="text-4xl text-center mt-8 ">Photo Gallery</h1>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4'>
                    <img src={image} alt="" className='rounded-lg hover:scale-110 transition-transform duration-300' />
                    <img src={image1} alt="" className='rounded-lg hover:scale-110 transition-transform duration-300' />
                    <img src={image2} alt="" className='rounded-lg hover:scale-110 transition-transform duration-300' />
                    <img src={image3} alt="" className='rounded-lg hover:scale-110 transition-transform duration-300' />
                    <img src={image4} alt="" className='rounded-lg hover:scale-110 transition-transform duration-300' />
                    <img src={image5} alt="" className='rounded-lg hover:scale-110 transition-transform duration-300' />
                    <img src={image6} alt="" className='rounded-lg hover:scale-110 transition-transform duration-300' />
                    <img src={image7} alt="" className='rounded-lg hover:scale-110 transition-transform duration-300' />
                </div>
            </div>



            <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
                <TabList>
                    <Tab>Teacher</Tab>
                    <Tab>Auditorium</Tab>
                    <Tab>Lab</Tab>
                    <Tab>Library</Tab>
                    <Tab>Convocation</Tab>
                </TabList>

                <TabPanel><PhotoTab items={teacher} ></PhotoTab></TabPanel>
                <TabPanel><PhotoTab items={auditorium} ></PhotoTab></TabPanel>
                <TabPanel><PhotoTab items={Lab} ></PhotoTab> </TabPanel>
                <TabPanel><PhotoTab items={Library} ></PhotoTab></TabPanel>
                <TabPanel><PhotoTab items={Convocation} ></PhotoTab></TabPanel>
            </Tabs>
        </div>
    );
};

export default PhotoGallery;