import initialState from './initialState'
import * as t from '../../actionTypes/articles'

const articles = (state = initialState, action) => {
  switch (action.type) {
    case t.OPEN_ARTICLE:
      return { ...state, openArticleId: action.payload, commentsIsOpen: false }
    case t.CLOSE_ARTICLE:
      return { ...state, openArticleId: null, commentsIsOpen: false }
    case t.OPEN_COMMENTS:
      return { ...state, commentsIsOpen: true }
    case t.CLOSE_COMMENTS:
      return { ...state, commentsIsOpen: false }
    default:
      return state
  }
}

export default articles
