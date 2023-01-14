import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import GalleryCarousel from '@components/GalleryCarousel';
import Modal from '@mui/material/Modal';
import { useKey } from 'react-use';

const GalleryBrowser = ({
  previewModalOpen,
  handleCloseModal,
  previewImg,
  setPreviewImg,
}) => {
  useKey('Escape', handleCloseModal);
  return (
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
  );
};

export default GalleryBrowser;
