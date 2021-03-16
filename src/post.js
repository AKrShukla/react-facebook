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
        this.post = props.post;
        this.state = {
            subject: props.post.attributes.subject,
            body: props.post.attributes.body,
            by: props.post.attributes.by,
            like: props.post.attributes.like,
            deleted: props.post.attributes.deleted,
            showinput: false
        };
        this.onLike = this.onLike.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.updateSubject = this.updateSubject.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateBy = this.updateBy.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }
    onLike(event){
        if(this.post.attributes.like === 'Like'){
            this.post.set({like: 'Unlike'});
        }
        else{
            this.post.set({like: 'Like'});
        }
        this.setState({like:this.post.attributes.like});
    }
    onEdit(event){
        this.setState({showinput: true});
    }
    updateSubject(event){
        this.setState({subject: this.subject.value});
    }
    updateBody(){
        this.setState({body: this.body.value});
    }
    updateBy(){
        this.setState({by: this.by.value});
    }
    onUpdate(){
        this.post.set({subject: this.subject.value,
            body: this.body.value,
            by: this.by.value
        });
        this.setState({showinput: false});
    }
    onDelete(){
        this.post.set({deleted: true});
        this.setState({deleted: true});
    }
    onCancel(){
        this.setState({
            subject: this.post.attributes.subject,
            body: this.post.attributes.body,
            by: this.post.attributes.by,
            showinput:false
        });
    }
    render(){
        if(this.state.deleted) {
            return(<></>);
        }
        else if(this.state.showinput) { 
            return (
                <tr>
                    <td><input className="form-control subject-input" value={this.state.subject} onChange={this.updateSubject} ref={subject => this.subject = subject}/></td>
                    <td><input className="form-control body-input" value={this.state.body} onChange={this.updateBody} ref={body => this.body = body}/></td>
                    <td><input className="form-control by-input" value={this.state.by} onChange={this.updateBy} ref={by => this.by = by}/></td>
                    <td><button className="btn btn-success like-post" onClick={this.onLike}>{this.state.like}</button>
                        <button className="btn btn-warning update-post" onClick={this.onUpdate}>Update</button> 
                        <button className="btn btn-danger cancel" onClick={this.onCancel}>Cancel</button></td>
                </tr>
            );
        }
        else{
            return(
                <tr>
                    <td><span className="subject">{this.state.subject}</span></td>
                    <td><span className="body">{this.state.body}</span></td>
                    <td><span className="by">{this.state.by}</span></td>
                    <td><button className="btn btn-success like-post" onClick={this.onLike}>{this.state.like}</button>
                        <button className="btn btn-warning edit-post" onClick={this.onEdit}>Edit</button> 
                        <button className="btn btn-danger delete-post" onClick={this.onDelete}>Delete</button></td>
                </tr>
            );
        }
    }
}
SinglePost.propTypes = propTypes;
export default SinglePost;
