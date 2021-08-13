import * as t from '../../actionTypes/articles'

const openArticle = (id) => {
  return {
    type: t.OPEN_ARTICLE,
    payload: id
  }
}

const closeArticle = () => {
  return {
    type: t.CLOSE_ARTICLE
  }
}

const openComments = () => {
  return {
    type: t.OPEN_COMMENTS
  }
}

const closeComments = () => {
  return {
    type: t.CLOSE_COMMENTS
  }
}

export { openArticle, closeArticle, openComments, closeComments }
