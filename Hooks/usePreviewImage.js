import { useState } from 'react';

export const usePreviewImage = () => {
  const [previewImg, setPreviewImg] = useState(null);
  return { previewImg, setPreviewImg };
};
