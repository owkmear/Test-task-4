import { createStore } from 'redux'
import articles from './reducers/articles'

const store = createStore(articles)
export default store
