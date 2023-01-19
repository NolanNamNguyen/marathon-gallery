import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchOptions: [],
  images: [],
  searching: false,
  fetchingImages: false,
  logs: '',
  saving: false,
};

export const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    testSagaFunction: (state) => {
      state.logs = 'Installed successfully';
    },
    logError: {
      reducer: (state, action) => {
        // eslint-disable-next-line no-console
        state.saving = true;
      },
      prepare: (
        file,
        callback,
        isUploadSingleImage,
        endpointAPI,
        extraParams,
      ) => ({
        payload: {
          file,
          callback,
          isUploadSingleImage,
          endpointAPI,
          extraParams,
        },
      }),
    },
    getSearchOption: (state) => {
      state.searching = true;
    },
    getSearchOptionSuccess: (state, { payload }) => {
      if (payload?.images.length) {
        const results = payload?.images.map((i) => ({
          ...i,
          thumbnail: `${process.env.NEXT_PUBLIC_API_URL}/${i.thumbnail}`,
        }));
        state.images = results;
      }
      state.searching = false;
    },
    getSearchOptionFailed: (state) => {
      state.searching = false;
    },
    getImages: (state) => {
      state.fetchingImages = true;
    },
    getImagesSuccess: (state, { payload: { images } }) => {
      if (images.length) {
        // const results = images.map((i) => ({
        //   ...i,
        //   thumbnail: `${process.env.NEXT_PUBLIC_API_URL}/${i.thumbnail}`,
        // }));
        state.images = images;
      }
      state.fetchingImages = false;
    },
    getImagesFailed: (state) => {
      state.fetchingImages = false;
    },
  },
});

export const {
  testSagaFunction,
  logError,
  getSearchOption,
  getSearchOptionSuccess,
  getSearchOptionFailed,
  getImages,
  getImagesFailed,
  getImagesSuccess,
} = homeSlice.actions;

export default homeSlice.reducer;
