import { Component } from 'react';
import PropTypes from 'prop-types';
const propTypes = {
    subject: PropTypes.string,
    body: PropTypes.string,
    by: PropTypes.string,
    like: PropTypes.string
}

class SinglePost extends Component{
    constructor(props){
        super(props);
        console.log(0);
    }
    componentWillMount() {
        // console.log('componentDidMount() lifecycle post');
        // this.setState({});
        this.setState({
            subject: this.props.post.attributes.subject,
            body: this.props.post.attributes.body,
            by:this.props.post.attributes.by,
            like: this.props.post.attributes.like})
    }
    onClick(){
        this.setState({like:'Unlike'});
    }

    render(){
        console.log(2);
        
        return(
                <tr>
                    <td><span className="subject">{this.state.subject}</span></td>
                    <td><span className="body">{this.state.body}</span></td>
                    <td><span className="by">{this.state.by}</span></td>
                    <td><button className="btn btn-success like-post" onClick={this.onClick}>{this.state.like}</button>
                        <button className="btn btn-warning edit-post">Edit</button> 
                        <button className="btn btn-danger delete-post">Delete</button></td>
                </tr>
        )
    }
}
SinglePost.propTypes = propTypes;
export default SinglePost;
