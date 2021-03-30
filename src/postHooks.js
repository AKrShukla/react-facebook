import React, {useState} from 'react';

function SinglePostHooks(props) {
    const post = props.post
    const [state, setState ] = useState({
            subject: props.post.get("subject"),
            body: props.post.get("body"),
            by: props.post.get("by"),
            like: props.post.get("like"),
            deleted: props.post.get("deleted"),
            showinput: false
        })
    const onLike = () => {
        if(post.get("like") === 'Like'){
            post.set({like: 'Unlike'});
        }
        else{
            post.set({like: 'Like'});
        }
        setState({...state, like: post.get("like")});
    }
    const onEdit = () => {
        setState({...state, showinput: true});
    }
    const onDelete = () => {
        post.set({deleted: true});
        setState({...state, deleted: true});
    }
    const updateSubject = e => {
        setState({...state, subject: e.target.value})
    }
    const updateBody = e => {
        setState({...state, body: e.target.value})
    }
    const updateBy = e => {
        setState({...state, by: e.target.value})
    }
    const onUpdate = () => {
        post.set({subject: state.subject,
            body: state.body,
            by: state.by
        });
        setState({...state, showinput: false});
    }
    const onCancel = () => {
        setState({ ...state,
            subject: post.get("subject"),
            body: post.get("body"),
            by: post.get("by"),
            showinput:false
        });
    }
    if(state.showinput) { 
        return (
            <tr>
                <td><input className="form-control subject-input" value={state.subject} onChange={updateSubject} /></td>
                <td><input className="form-control body-input" value={state.body} onChange={updateBody} /></td>
                <td><input className="form-control by-input" value={state.by} onChange={updateBy} /></td>
                <td><button className="btn btn-success like-post" onClick={onLike}>{state.like}</button>
                    <button className="btn btn-warning update-post" onClick={onUpdate}>Update</button> 
                    <button className="btn btn-danger cancel" onClick={onCancel}>Cancel</button>
                </td>
            </tr>
        );
    }
    else if(!state.deleted){
        return(
            <tr>
                <td><span className="subject">{state.subject}</span></td>
                <td><span className="body">{state.body}</span></td>
                <td><span className="by">{state.by}</span></td>
                <td><button className="btn btn-success like-post" onClick={onLike}>{state.like}</button>
                    <button className="btn btn-warning edit-post" onClick={onEdit}>Edit</button> 
                    <button className="btn btn-danger delete-post" onClick={onDelete}>Delete</button>
                </td>
            </tr>
        );
    }
    else{
        return null;
    }
}

export default SinglePostHooks;