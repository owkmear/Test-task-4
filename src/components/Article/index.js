import React, { Fragment } from 'react'
import Comments from '../Comments'
import { connect } from 'react-redux'
import { openArticle, closeArticle } from '../../store/actions/articles'

class Article extends React.Component {
  handleArticleClick = () => {
    const { article, openArticleId, openArticle, closeArticle } = this.props
    if (openArticleId) {
      const articleIsOpen = article.id === openArticleId
      if (articleIsOpen) closeArticle()
      else openArticle(article.id)
    } else openArticle(article.id)
  }

  render() {
    const { article, openArticleId } = this.props
    const articleIsOpen = article.id === openArticleId
    return (
      <div className="article">
        <h1 className="article__title" onClick={this.handleArticleClick}>
          {article.title}
        </h1>
        {articleIsOpen && (
          <Fragment>
            <p className="article__text">{article.body}</p>
            {article.comments.length > 0 && <Comments comments={article.comments} />}
          </Fragment>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = {
  openArticle,
  closeArticle
}

const mapStateToProps = (state) => {
  return {
    openArticle: state.openArticle,
    openArticleId: state.openArticleId
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
