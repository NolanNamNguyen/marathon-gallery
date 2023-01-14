import React from 'react';
import classes from '@components/GalleryCarousel/GalleryCarousel.module.scss';

const ImageSlider = ({ images, setPreviewImg }) => {
  return (
    <div className={classes.image_slider}>
      {images.map((image, index) => (
        <div
          key={`my-fucking-thumbnail-${index}`}
          className={classes.thumbnail_container}
          onClick={() => {
            setPreviewImg(image);
          }}
        >
          <div>
            <img src={image.thumbnail} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
