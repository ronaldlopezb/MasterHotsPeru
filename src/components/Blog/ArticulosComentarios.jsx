import React from 'react'
import ComentarioFormulario from '../../components/Blog/ComentarioFormulario'
const ArticulosComentarios = () => {
    return (
        <>
            <div className="comments-area">
                <h5 className="comments-title">3 Comments</h5>
                <div className="comment-list">
                    {/* Comment */}
                    <div className="comment">
                        <div className="comment-author"><img className="avatar img-fluid rounded-circle" src="/img/client-2.jpg" alt="comment" /></div>
                        <div className="comment-body">
                            <div className="comment-meta">
                                <div className="comment-meta-author"><a href="/#">Jason Ford</a></div>
                                <div className="comment-meta-date"><a href="/#">May 5, 2015 at 4:51 am</a></div>
                            </div>
                            <div className="comment-content">
                                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Seitan High Life reprehenderit consectetur cupidatat kogi about me. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica.</p>
                            </div>
                            <div className="comment-reply"><a href="/#">Reply</a></div>
                        </div>
                        {/* Subcomment */}
                        <div className="children">
                            <div className="comment">
                                <div className="comment-author"><img className="avatar img-fluid rounded-circle" src="/img/client-3.jpg" alt="comment" /></div>
                                <div className="comment-body">
                                    <div className="comment-meta">
                                        <div className="comment-meta-author"><a href="/#">Harry Benson</a></div>
                                        <div className="comment-meta-date"><a href="/#">May 5, 2015 at 4:51 am</a></div>
                                    </div>
                                    <div className="comment-content">
                                        <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Seitan High Life reprehenderit consectetur cupidatat kogi about me. Photo booth anim 8-bit hella.</p>
                                    </div>
                                    <div className="comment-reply"><a href="/#">Reply</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Comment */}
                    <div className="comment">
                        <div className="comment-author"><img className="avatar img-fluid rounded-circle" src="/img/client-4.jpg" alt="comment" /></div>
                        <div className="comment-body">
                            <div className="comment-meta">
                                <div className="comment-meta-author"><a href="/#">Henry Cain</a></div>
                                <div className="comment-meta-date"><a href="/#">May 5, 2015 at 4:51 am</a></div>
                            </div>
                            <div className="comment-content">
                                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Seitan High Life reprehenderit consectetur cupidatat kogi about me. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica.</p>
                            </div>
                            <div className="comment-reply"><a href="/#">Reply</a></div>
                        </div>
                    </div>
                </div>
                <ComentarioFormulario/>
            </div>
        </>
    )
}

export default ArticulosComentarios
