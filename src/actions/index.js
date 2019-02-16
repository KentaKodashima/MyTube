import youtube from '../api/youtube'

export const fetchVideos = (term) => async dispatch => {
  const response = await await youtube.get('search', {
    params: {
      q: term
    }
  })

  dispatch({ type: 'FETCH_VIDEOS', payload: response.data.items })
}

export const selectVideo = (video) => {
  return {
    type: 'VIDEO_SELECTED',
    payload: video
  }
}