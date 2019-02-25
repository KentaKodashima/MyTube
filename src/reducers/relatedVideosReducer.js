import { FETCH_RELATED_VIDEOS } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_RELATED_VIDEOS:
      return action.payload
    default:
      return state
  }
}