import React, { Fragment } from 'react'
import moment from 'moment'

class Comment extends React.Component {
  render() {
    const { username, text, time } = this.props
    const timeFromNow = moment.unix(time).fromNow()
    return (
      <Fragment>
        <h4 className="comment__username">
          {username} <time className="comment__time">{timeFromNow}</time>
        </h4>
        <p className="comment__text">{text}</p>
      </Fragment>
    )
  }
}

export default Comment
