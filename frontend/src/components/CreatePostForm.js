import React, { Component } from 'react';
import Auth from '../models/Auth'

export default class CreatePostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      thumbnail_image_url: ''
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  handleChange(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  onFormSubmit(e) {
    e.preventDefault()
    let user = Auth.getUser()
    let post = this.state
    post.user = user
    this.props.createPost(post)
    this.toggleModal();
  };

  toggleModal() {
    let modal = document.querySelector(".modal")
    modal.classList.toggle('is-active')
  }

  render() {

    return (
      <div className="create-btn">

        <a
          className="button is-primary is-inverted"
          onClick={ this.toggleModal }>Post!</a>

        <div className="modal">
          <div className="modal-background" onClick={ this.toggleModal }></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Post Something!</p>
              <button
                className="delete"
                aria-label="close"
                onClick={ this.toggleModal }></button>
            </header>
            <form onSubmit={ e => this.onFormSubmit(e) }>
              <section className="modal-card-body">
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      onChange={ this.handleChange('title') } />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Image</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="http://..."
                      onChange={ this.handleChange('thumbnail_image_url') } />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="What do you want to say?"
                      onChange={ this.handleChange('content') }></textarea>
                  </div>
                </div>
              </section>
              <footer className="modal-card-foot">
                <button
                  type="submit"
                  className="button is-dark is-outlined">Create</button>
              </footer>
            </form>
          </div>
        </div>

      </div>

    )
  }
}
