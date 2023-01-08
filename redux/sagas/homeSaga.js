import { all, takeEvery, put } from 'redux-saga/effects';

import {
  getSearchOption,
  getSearchOptionSuccess,
  getSearchOptionFailed,
  getImages,
  getImagesSuccess,
  getImagesFailed,
} from '../slices/homeSlice';
import Api from '../../config/api';
import { GET_IMAGES, SEARCH_IMAGES } from '@constant/endpoint';

function* handleSearch(params) {
  try {
    const response = yield Api.get(SEARCH_IMAGES, { params });
    yield put(getSearchOptionSuccess(response.data));
  } catch (error) {
    yield put(getSearchOptionFailed(error.response.data));
  }
}

function* handleGetImages(params) {
  console.log('wtf is this');
  try {
    // const response = yield Api.get(GET_IMAGES, { params });
    // console.log('response', response);
    const mock = {
      selection_text: 'Danang 2022 - Location 1',
      images: [
        {
          thumbnail:
            'https://i.pinimg.com/originals/d2/4b/be/d24bbe79387549086d159aa4462bf4c9.png',
          full_size:
            'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
        },
        {
          thumbnail:
            'https://www.pngkey.com/png/detail/14-148130_minion-imagenes-de-100x100-pixeles.png',
          full_size:
            'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
        },
        {
          thumbnail:
            'https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png',
          full_size:
            'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg',
        },
        {
          thumbnail:
            'https://s1.piq.land/2011/11/11/SzeBd4LeVj3I8H7Ynwh18PHU_400x400.png',
          full_size:
            'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg',
        },
        {
          thumbnail:
            'https://flink.apache.org/img/logo/png/500/flink_squirrel_500.png',
          full_size:
            'https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg',
        },
        {
          thumbnail:
            'https://www.shutterstock.com/image-vector/2d-basic-shapes-collection-set-260nw-1931448800.jpg',
          full_size:
            'https://cdn1.byjus.com/wp-content/uploads/2020/01/Definition-of-Triangle.png',
        },
        {
          thumbnail:
            'https://i.pinimg.com/736x/53/1e/17/531e1777b0ab89eb13484f45116aac09--creative-portraits-famous-faces.jpg',
          full_size:
            'https://i.pinimg.com/originals/ae/70/a9/ae70a91eb726ef504a4358e251c0b278.jpg',
        },
        {
          thumbnail:
            'https://w7.pngwing.com/pngs/327/766/png-transparent-old-school-runescape-youtube-elf-random-icons-child-face-hand-thumbnail.png',
          full_size:
            'https://media.gettyimages.com/id/673125673/photo/group-of-friends-playing-together-in-outdoor-pool.jpg?s=612x612&w=gi&k=20&c=JEXPwElt9oobbEa_cp8FeX3S1JgPloRST4l4SH4Zdgo=',
        },
        {
          thumbnail:
            'https://png.pngitem.com/pimgs/s/49-497525_annoyed-peter-peter-family-guy-transparent-hd-png.png',
          full_size:
            'https://repository-images.githubusercontent.com/306168718/40256bdb-97e5-4adf-a597-11df92d8d35c',
        },
        {
          thumbnail:
            'https://www.pngkey.com/png/detail/912-9127066_random-image-from-user-pixel-art-planet-png.png',
          full_size:
            'https://cdn.memes.com/up/45295481659820823/i/1660419471492.png',
        },
        {
          thumbnail:
            'https://sciartica.net/wp-content/uploads/2015/08/TrueRandom2.png',
          full_size:
            'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/114131672/original/5f03e84975a3e52c91166d03b89c6af7e061ca44/send-you-a-random-meme-image-that-will-tickle-your-fancy.jpg',
        },
        {
          thumbnail:
            'https://www.pngfind.com/pngs/m/304-3048327_random-image-from-user-minecraft-iron-axe-png.png',
          full_size:
            'https://static.wikia.nocookie.net/yurionice/images/d/d1/Maybe_i_should_have_studied.png/revision/latest?cb=20171116074015',
        },
      ],
    };
    yield put(getImagesSuccess(mock));
  } catch (error) {
    yield put(getImagesFailed(error.response.data));
  }
}

function* homeSaga() {
  yield all([
    takeEvery(getSearchOption.type, handleSearch),
    takeEvery(getImages.type, handleGetImages),
  ]);
}

export default homeSaga;
