import React, { Fragment } from 'react'
import Comment from '../Comment'
import { connect } from 'react-redux'
import { openComments, closeComments } from '../../store/actions/articles'

class Comments extends React.Component {
  handleCommentsClick = () => {
    const { commentsIsOpen, openComments, closeComments } = this.props
    if (commentsIsOpen) closeComments()
    else openComments()
  }

  render() {
    const { comments, commentsIsOpen } = this.props
    const commentsList = comments.map((comment) => (
      <div key={comment.id} className="comment">
        <Comment username={comment.username} text={comment.text} time={comment.time} />
      </div>
    ))
    return (
      <Fragment>
        <span className="article__see-comments" onClick={this.handleCommentsClick}>
          {commentsIsOpen ? 'Свернуть комментарии' : 'Открыть комментарии'}
        </span>
        {commentsIsOpen && <div className="article__comments">{commentsList}</div>}
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  openComments,
  closeComments
}

const mapStateToProps = (state) => {
  return {
    commentsIsOpen: state.commentsIsOpen
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
