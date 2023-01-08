import React, { useState } from 'react';
import SearchContainer from '@components/SearchContainer';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import GalleryContainer from '@components/GalleryContainer';
import GalleryCarousel from '@components/GalleryCarousel';

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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={previewModalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <GalleryCarousel
          setPreviewImg={setPreviewImg}
          closeModal={handleCloseModal}
          previewImg={previewImg}
        />
      </Modal>
    </>
  );
};

export default Home;
