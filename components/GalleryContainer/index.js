import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from '@scss/components/HomePage.module.scss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ImageContainer from '@components/ImageContainer';
import { useElementSize, useWindowSize } from 'usehooks-ts';

const GalleryContainer = ({ images }) => {
  const [squareRef, { width, height }] = useElementSize();
  console.log('width', width);
  const lastElmOf1stRow = useRef(1);
  const fixedElementsY = useRef(0);
  const { width } = useWindowSize();
  const lastWidth = useRef(initialValue);
  const updateLastElm = (position, currentWidth) => {
    if (lastElmOf1stRow.current < position) {
      lastElmOf1stRow.current = position;
    }
  };
  const setFixedElementsY = (Yaxis) => {
    fixedElementsY.current = Yaxis;
  };
  return (
    <div ref={squareRef} className={classes.gallery_container}>
      {images.map((loadedImg, i) => (
        <ImageContainer
          updateLastElm={updateLastElm}
          setFixedElementsY={setFixedElementsY}
          fixedElementsY={fixedElementsY}
          key={`image-${i}`}
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
