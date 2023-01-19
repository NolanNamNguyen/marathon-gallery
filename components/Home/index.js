import React, { useState } from 'react';
import SearchContainer from '@components/SearchContainer';
import GalleryContainer from '@components/GalleryContainer';
import GalleryBrowser from '@components/GalleryBrowser';

const Home = () => {
  const [previewImg, setPreviewImg] = useState(null);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const handleCloseModal = () => {
    setPreviewModalOpen(false);
  };
  const setSetPreviewImg = (image) => {
    setPreviewImg(image);
    setPreviewModalOpen(true);
  };
  return (
    <>
      <SearchContainer />
      <GalleryContainer setSetPreviewImg={setSetPreviewImg} />
      <GalleryBrowser
        previewModalOpen={previewModalOpen}
        handleCloseModal={handleCloseModal}
        previewImg={previewImg}
        setPreviewImg={setPreviewImg}
      />
    </>
  );
};

export default Home;
