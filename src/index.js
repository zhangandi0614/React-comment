import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './CommentApp'
import PercentageApp from './百分比换算器'
import './index.css'
//上面这个一会研究
  // const lessons = [
  //   { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  //   { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  //   { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  //   { title: 'Lesson 4: title', description: 'Lesson 4: description' }
  // ]
  // class Lesson extends Component {
  //   render () {
  //     const { lesson } = this.props
  //     return (
  //       <div onClick={() => console.log(`${this.props.index} - ${lesson.title}`)}>
  //         <h1>{lesson.title}</h1>
  //         <p>{lesson.description}</p>
  //       </div>
  //     )
  //   }
  // }
  
  // class LessonsList extends Component {
  //   render () {
  //     return (
  //       <div>{this.props.lessons.map((lesson, i) => {
  //         return <Lesson key={i} index={i} lesson={lesson} />
  //       })}</div>
  //     )
  //   }
  // }
class Index extends Component {
    render() {
      return(
        <div>
          <CommentApp />
        </div>
      )
    }
}
//shuaxin
ReactDOM.render( 
    <Index / > ,
    document.getElementById('root')
)