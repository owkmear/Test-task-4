import React from 'react'
import Article from '../Article'
import { connect } from 'react-redux'

class Articles extends React.Component {
  render() {
    const { data } = this.props
    const articles = data.map((article) => (
      <div key={article.id} className="articles__item">
        <Article article={article} />
      </div>
    ))
    return <div className="articles">{articles}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Articles)
