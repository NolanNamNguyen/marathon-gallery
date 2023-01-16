import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ImageContainer from '@components/ImageContainer';
import { useElementSize, useWindowSize } from 'usehooks-ts';
import { useTimeoutFn } from 'react-use';

const GalleryContainer = ({ images, setSetPreviewImg }) => {
  const mapElmPosition = [
    { Wwidth: 480, col: 1 },
    { Wwidth: 1126, col: 2 },
    { Wwidth: 1487, col: 3 },
    { Wwidth: 1847, col: 4 },
    { Wwidth: 2207, col: 5 },
    { Wwidth: 3000, col: 6 },
    { Wwidth: 3500, col: 7 },
  ];
  const [isShowing, setIsShowing] = useState(false);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  const [squareRef] = useElementSize();
  const [numOfCols, setNumOfCols] = useState(2);
  const windowSize = useWindowSize();

  const resetShow = () => {
    setIsShowing(false);
    resetIsShowing();
  };

  useEffect(() => {
    resetShow();
  }, [numOfCols]);

  useEffect(() => {
    const cols = mapElmPosition.find(
      (screen) => windowSize.width < screen.Wwidth,
    )?.col;
    setNumOfCols(cols > -1 ? cols : 7);
  }, [windowSize.width]);

  return (
    <div
      style={{ columnCount: numOfCols }}
      ref={squareRef}
      className="gallery_container"
    >
      {images.map((loadedImg, i) => (
        <ImageContainer
          setSetPreviewImg={setSetPreviewImg}
          key={`image-${i}`}
          show={isShowing}
          loadedImg={loadedImg}
          index={i}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: state.homeReducer.images,
});

const mapDispatchToProps = (dispatch) => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(GalleryContainer);
