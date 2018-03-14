import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comment:[]
        }
    }
    handleOnSubmit (comment) {
        console.log(comment)
        if(!comment) alert('please input')
        if(!comment.username) alert('请输入用户名')
        if(!comment.content) alert('请输入评论内容')
        this.state.comment.push(comment)
        this.setState({
            comment:this.state.comment
        })
    }
    render() {
        return(
            <div className="wrapper">
                <CommentInput onSubmit = {this.handleOnSubmit.bind(this)} />
                <CommentList comments = {this.state.comment}/>
            </div>
        )
    }
}export default CommentApp