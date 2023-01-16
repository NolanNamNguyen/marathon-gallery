import React from 'react';

const ImageSlider = ({ images, setPreviewImg }) => {
  return (
    <div className="image_slider">
      {images.map((image, index) => (
        <div
          key={`my-fucking-thumbnail-${index}`}
          className="thumbnail_container"
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
