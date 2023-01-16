import React, { useRef } from 'react';
import { Transition } from '@headlessui/react';

const ImageContainer = ({ loadedImg, show, setSetPreviewImg }) => {
  const containerRef = useRef();
  const selectImage = () => {
    setSetPreviewImg(loadedImg);
  };
  return (
    <Transition
      show={show}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 translate-y-12"
      enterTo="opacity-100 translate-y-0"
      leave="transform duration-400 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0"
      leaveTo="opacity-0"
    >
      <div
        onClick={() => {
          selectImage();
        }}
        ref={containerRef}
        className="img_container"
      >
        <img alt="Ops!!!" src={loadedImg.thumbnail} />
      </div>
    </Transition>
  );
};

export default ImageContainer;
