import { combineReducers } from 'redux'
import videosReducer from './videosReducer'
import selectedVideoReducer from './selectedVideoReducer'
import relatedVideosReducer from './relatedVideosReducer'

export default combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer,
  relatedVideos: relatedVideosReducer
})
