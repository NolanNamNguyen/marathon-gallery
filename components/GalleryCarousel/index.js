import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CloseIcon from '@mui/icons-material/Close';
import classes from './GalleryCarousel.module.scss';
import { connect } from 'react-redux';
import { compose } from 'redux';

const GalleryCarousel = ({ previewImg, closeModal, images, setPreviewImg }) => {
  return (
    <div className={classes.container}>
      <div className={classes.image_container}>
        <div>
          {previewImg ? <img alt="Ops!!!" src={previewImg.thumbnail} /> : null}
        </div>
      </div>
      <div className={classes.slider_container}>
        <div className={classes.achievement}>
          <h1 className="text-orange-500">THÀNH TÍCH</h1>
          <hr />
          <div className={classes.pace}>
            <div>
              <h2 className="text-white">84956 | 21Km</h2>
              <h3 className="text-orange-500">2:07:46</h3>
              <span className="text-sm text-white">Pace trung bình: 6:03</span>
            </div>
            <div className="cursor-pointer text-blue-700 rounded-lg bg-gray-700 flex">
              <FacebookIcon color="primary" />
              <span className="text-blue-800">Chia sẻ Facebook</span>
            </div>
          </div>
          <hr />
          <div className="cursor-pointer text-blue-700 rounded-lg bg-gray-700 flex">
            <DownloadForOfflineIcon htmlColor="#121212" />
            <span className="text-black">HD</span>
          </div>
        </div>
        <div className={classes.slider}>
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
        </div>
      </div>
      <CloseIcon
        className="absolute top-[10px] right-[20px] cursor-pointer"
        onClick={closeModal}
        fontSize="large"
        htmlColor="#ffffff"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: state.homeReducer.images,
});

const mapDispatchToProps = (dispatch) => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(GalleryCarousel);
