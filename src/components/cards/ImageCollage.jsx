import React from 'react';
import GridViewIcon from '@mui/icons-material/GridView';

const ImageContainer = ({ image, isLast, onShowAll }) => (
    <div
        className={`relative small-image bg-cover bg-center rounded-lg ${isLast ? 'flex items-end justify-end' : ''}`}
        style={{
            backgroundImage: `url(${image})`,
            width: '194px',
            height: '194px',
        }}
    >
        {isLast && (
            <button className="flex items-center bg-white text-black px-3 py-1 m-2 rounded-md" onClick={onShowAll}>
                <GridViewIcon style={{ fontSize: '16px', marginRight: '2px' }} /> <span className="text-[13px]">Show all photos</span>
            </button>
        )}
    </div>
);

const ImageCollage = ({ mainImage, smallImages, onShowAll }) => {
    return (
        <div className="flex justify-center items-center gap-3">
            {/* Main Image */}
            <div
                className="main-image bg-cover bg-center rounded-lg"
                style={{
                    backgroundImage: `url(${mainImage})`,
                    width: '790px',
                    height: '400px',
                }}
            />

            {/* Small Images */}
            <div className="small-images grid grid-cols-2 gap-3">
                {smallImages.slice(0, 4).map((image, index) => (
                    <ImageContainer
                        key={index}
                        image={image}
                        isLast={index === 3}
                        onShowAll={onShowAll}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCollage;