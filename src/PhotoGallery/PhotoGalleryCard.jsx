const PhotoGalleryCard = ({photo}) => {
    const {image}=photo
    return (
        <div className="rounded-lg hover:scale-110 transition-transform duration-300">
            <img src={image} alt="" />
        </div>
    );
};

export default PhotoGalleryCard;