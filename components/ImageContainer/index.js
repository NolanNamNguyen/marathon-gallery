import React, { useEffect, useRef } from 'react';
import classes from '@scss/components/HomePage.module.scss';
import { useWindowSize } from 'usehooks-ts';

const ImageContainer = ({
  index,
  loadedImg,
  setFixedElementsY,
  updateLastElm,
  fixedElementsY,
}) => {
  const containerRef = useRef();
  const position = index + 1;
  const { width } = useWindowSize();
  useEffect(() => {
    if (!index) {
      const YofFirstFixedElement =
        containerRef.current.getBoundingClientRect().y;
      console.dir(containerRef.current.getBoundingClientRect());
      setFixedElementsY(YofFirstFixedElement);
    }
    if (fixedElementsY) {
      containerRef.current.getBoundingClientRect().y !== fixedElementsY &&
        updateLastElm(position);
    }
  }, [width]);

  return (
    <div
      id={`img-container-${position}`}
      ref={containerRef}
      className={classes.img_container}
    >
      <img alt="Ops!!!" src={loadedImg.thumbnail} />
    </div>
  );
};

export default ImageContainer;
