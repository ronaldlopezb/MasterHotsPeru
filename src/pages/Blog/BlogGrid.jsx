import React from 'react'
import CabeceraBlog from '../../components/Cabeceras/CabeceraBlog'
import BlogPage from '../../components/Blog/BlogPage'

const BlogGrid = () => {
    return (
        <>
            <div className="main">
                <CabeceraBlog/>
                <BlogPage/>
            </div>
        </>
    )
}

export default BlogGrid
