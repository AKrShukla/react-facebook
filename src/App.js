// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import './model';
import { Component } from 'react';
import Post, { posts } from './model';
import SinglePost from './post';

class App extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  // componentDidMount() {
  //   console.log('componentDidMount() app');
  //   this.setState({});
  // }

  onClick(event){
    event.preventDefault();
    var post = new Post({
      subject: this.subject.value,
      body: this.body.value,
      by: this.by.value
    });
    posts.add(post);
    this.setState({});

    // console.log(posts.toArray());
    // console.log(post.toJSON());

  }
  render(){
  console.log(1);
  return (
    <div className="App">
      <div className="container">
        <h1>Facebook Post using Backbone JS</h1>
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
                
                posts.map((post, index) =>{
                  
                  return (
                    <SinglePost key={index} post={post}>{post.attributes.by}</SinglePost>
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
