import React, { Component } from 'react'

export default class TextPost extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log(this.props.post.thumbnail_image_url)
    return(

      <article className="media">
        <figure className="media-left">
          <p className="image is-96x96">
            <img
              src={ this.props.post.thumbnail_image_url }
              alt={ this.props.post.title } />
          </p>
        </figure>
        <div className="media-content">
          <div className="content" data-post-index={this.props.post.post_id}>
            <h3>{this.props.post.title}</h3>
            <p>{this.props.post.content}</p>
          </div>
        </div>
      </article>

    )
  }
}
