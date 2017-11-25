import React, { Component } from 'react'

export default class TextPost extends Component {
  constructor(props) {
    super(props);
    this.deletePost = this.deletePost.bind(this)
  }

  deletePost(e) {
    e.preventDefault();
    let id = this.props.post._id
    this.props.onDeletePost(id)
  }

  render() {
    return(

      <article className="media">
        <figure className="media-left">
          <img
            className="image is-96x96"
            src={ this.props.post.thumbnail_image_url }
            alt={ this.props.post.title } />
        </figure>
        <div className="media-content">
          <div className="content" data-post-index={this.props.post.post_id}>
            <h3 className="post-title">{this.props.post.title}</h3>
            <p>{this.props.post.content}</p>
          </div>
        </div>
        <div className="media-right">
          <button
            className="delete"
            onClick={this.deletePost}></button>
        </div>
      </article>

    )
  }
}
