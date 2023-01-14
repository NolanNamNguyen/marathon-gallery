import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CloseIcon from '@mui/icons-material/Close';
import classes from './GalleryCarousel.module.scss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ImageSlider from '@components/Slider';
import { Button, createTheme, ThemeProvider } from '@mui/material';

const GalleryCarousel = ({ previewImg, closeModal, images, setPreviewImg }) => {
  console.log('previewImg', previewImg.thumbnail);
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      black: {
        main: '#121212',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <div className="flex flex-grow">
          <div className={classes.image_container}>
            {previewImg ? (
              <img alt="Ops!!!" src={previewImg.thumbnail} />
            ) : null}
          </div>
          <div className={classes.slider_container}>
            <div className={classes.achievement}>
              <h1 className="text-orange-500">THÀNH TÍCH</h1>
              <hr />
              <div className={classes.pace}>
                <div>
                  <h2 className="text-white">84956 | 21Km</h2>
                  <h3 className="text-orange-500">2:07:46</h3>
                  <span className="text-sm text-white">
                    Pace trung bình: 6:03
                  </span>
                </div>
                <Button
                  className={`bg-[#222222] pl-4 flex justify-start ${classes.facebook_button}`}
                  variant="outlined"
                  startIcon={
                    <div className="flex">
                      <FacebookIcon fontSize="large" color="primary" />
                    </div>
                  }
                >
                  <span className="text-blue-800 font-bold">Facebook</span>
                </Button>
              </div>
              <Button
                className="bg-[#ddba29] hover:bg-[#ddba29] border-0 hover:border-0 flex items-center justify-start pl-4"
                variant="outlined"
                startIcon={
                  <div className="flex">
                    <DownloadForOfflineIcon fontSize="large" color="black" />
                  </div>
                }
              >
                <span className="text-black font-bold">HD</span>
              </Button>
            </div>
          </div>
          <CloseIcon
            className="absolute top-[10px] right-[20px] cursor-pointer"
            onClick={closeModal}
            fontSize="large"
            htmlColor="#ffffff"
          />
        </div>
        <div className={classes.slider}>
          <ImageSlider images={images} setPreviewImg={setPreviewImg} />
        </div>
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  images: state.homeReducer.images,
});

const mapDispatchToProps = (dispatch) => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(GalleryCarousel);
