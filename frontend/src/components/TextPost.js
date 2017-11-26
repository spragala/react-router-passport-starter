import React, { Component } from 'react'

export default class TextPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      editable: false,
    }
    this.deletePost = this.deletePost.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked
    })
  }

  handleEdit() {
    this.setState({editable: !this.state.editable})

  }

  handleChange(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log('form submit', this.state.content)
    let post = this.state.content
    this.props.onFormSubmit(post)
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
          <div className="content" data-post-index={ this.props.post.post_id }>
            <h3 className="post-title">{ this.props.post.title }</h3>
            {this.state.editable ? (
              <form onSubmit={ e => this.onFormSubmit(e) }>
                <input
                  defaultValue={ this.props.post.content }
                  onChange={ this.handleChange('content') }></input>
                <button type="submit"></button>
              </form>
            ) : (
              <p>{ this.props.post.content }</p>
            )}
          </div>
          <div className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span
                  className="icon is-small"
                  onClick={ this.handleEdit } >
                  <i className="fa fa-pencil-square-o"></i>
                </span>
              </a>

              <a className="level-item">
                <span className="icon is-small" onClick={ this.handleClick }>
                  { this.state.liked ? (
                    <i className="fa fa-heart"></i>
                  ): (
                    <i className="fa fa-heart-o"></i>
                  ) }
                </span>
              </a>
            </div>
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
