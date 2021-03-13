import React from 'react'

const ComentarioFormulario = () => {
    return (
        <>
            <div className="comment-respond">
                <h5 className="comment-reply-title">Leave a Reply</h5>
                <p className="comment-notes">Your email address will not be published. Required fields are marked</p>
                <form className="comment-form row">
                    <div className="form-group col-md-4">
                        <input className="form-control" type="text" placeholder="Name" />
                    </div>
                    <div className="form-group col-md-4">
                        <input className="form-control" type="text" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-4">
                        <input className="form-control" type="url" placeholder="Website" />
                    </div>
                    <div className="form-group col-md-12">
                        <textarea className="form-control" rows="8" placeholder="Comment"></textarea>
                    </div>
                    <div className="form-submit col-md-12">
                        <button className="btn btn-brand-01" type="submit">Post Comment</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ComentarioFormulario
