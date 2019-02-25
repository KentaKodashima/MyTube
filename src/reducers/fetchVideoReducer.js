import { FETCH_VIDEO } from '../actions/types'

export default (action) => {
  switch (action.type) {
    case FETCH_VIDEO:
      return action.payload
    default:
      return selectedVideo
  }
}