import youtube from '../api/youtube'
import { FETCH_VIDEOS, VIDEO_SELECTED, FETCH_VIDEO } from './types'

export const fetchVideos = (term) => async dispatch => {
  const response = await await youtube.get('search', {
    params: {
      q: term
    }
  })

  dispatch({ type: FETCH_VIDEOS, payload: response.data.items })
}

export const fetchVideo = (id) => {
  return {
    type: FETCH_VIDEO,
    payload: id
  }
}

export const selectVideo = (video) => {
  return {
    type: VIDEO_SELECTED,
    payload: video
  }
}