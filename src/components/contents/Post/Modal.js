import React from 'react';
import ReactDOM from 'react-dom';
import FormAddPost from '../Post/FormAddPost';
import FormEditPost from '../Post/FormEditPost';

const Modal = ({ isShowing, hide, action, postId, fetchPostList }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal-form">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p>
          {
            (action !== 'add') ? (<FormEditPost fetchPostList={fetchPostList} postId={postId} hide={hide}></FormEditPost>) : (<FormAddPost fetchPostList={fetchPostList} hide={hide}></FormAddPost>) 
          }
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;
