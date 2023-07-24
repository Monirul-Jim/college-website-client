import PhotoGalleryCard from "./PhotoGalleryCard";


const PhotoTab = ({items}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="3000" className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
               items.map(photo=><PhotoGalleryCard key={photo._id} photo={photo}>

               </PhotoGalleryCard>)
             }
        </div>
    );
};

export default PhotoTab;