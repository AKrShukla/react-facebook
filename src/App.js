import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import Post, { posts } from './model';
import SinglePost from './post';

class App extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(event){
    event.preventDefault();
    if (this.subject.value === ''){
      alert('Subject should not be empty');
    }
    else if (this.body.value === ''){
      alert('Body should not be empty');
    }
    else if (this.by.value === ''){
      alert('By should not be empty');
    }
    else{
      var post = new Post({
        subject: this.subject.value,
        body: this.body.value,
        by: this.by.value
      });
      posts.add(post);
      this.subject.value = '';
      this.body.value = '';
      this.by.value = '';
      this.setState({});
    }
  }
  render(){
  return (
    <div className="App">
      <div className="container">
        <h1>Facebook Post using Backbone JS and React JS</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Body</th>
                    <th>By</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td><input className="form-control subject-input" ref={subject => this.subject = subject}/></td>
                    <td><input className="form-control body-input" ref={body => this.body = body}/></td>
                    <td><input className="form-control by-input" ref={by => this.by = by}/></td>
                    <td><button className="btn btn-primary add-post" onClick={this.onClick}>Post</button></td>
                </tr>
            </thead>
            <tbody className="posts-list">
              {
                posts.toArray().map((post, index) =>{
                  if(post.attributes.deleted){
                    post.destroy();
                  }
                  return (
                    <SinglePost key={index} attributes={post.attributes}></SinglePost>
                  )
                })
              }
            </tbody>
        </table>
        </div>
    </div>
  );
  }
}

export default App;
