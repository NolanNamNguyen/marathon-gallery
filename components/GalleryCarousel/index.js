import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ImageSlider from '@components/Slider';
import { createTheme, ThemeProvider } from '@mui/material';

const GalleryCarousel = ({ previewImg, closeModal, images, setPreviewImg }) => {
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
      <div className="gal_container">
        <div className="flex flex-grow">
          <div className="image_container">
            {previewImg ? (
              <img alt="Ops!!!" src={previewImg.full_size} />
            ) : null}
          </div>
          <CloseIcon
            className="absolute top-[10px] right-[20px] cursor-pointer"
            onClick={closeModal}
            fontSize="large"
            htmlColor="#ffffff"
          />
        </div>
        <div className="slider no-scrollbar">
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
