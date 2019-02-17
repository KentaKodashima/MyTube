import { combineReducers } from 'redux'
import videosReducer from './videosReducer'
import selectedVideoReducer from './selectedVideoReducer'

export default combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer
})
