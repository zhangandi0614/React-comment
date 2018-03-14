import React, { Component } from 'react';
class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username:'',
            content:''
        }
    }
    handleOnchangeUser(event) {
        this.setState({
            username:event.target.value,
        })
    }
    handleOnchangeContent(event) {
        this.setState({
            content:event.target.value,
        })
    }
    handleSubmit() {
        if(this.props.onSubmit) {
            const{username,content} = this.state
            this.props.onSubmit({username,content})
        }
        this.setState({
            content:''
        })
    }
    render() {
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>Username:</span>
                    <div className="comment-field-input">
                        <input value = {this.state.username} onChange={this.handleOnchangeUser.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field">
                <span className='comment-field-name'>Content:</span>
                    <div className="comment-field-input">
                        <textarea value = {this.state.content} onChange={this.handleOnchangeContent.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                <button onClick={this.handleSubmit.bind(this)}>
                发布
                </button>
                </div>
                
            </div>
        )
    }
}export default CommentInput