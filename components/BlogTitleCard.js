import React from 'react'

const BlogTitleCard = ({ id, title, summary, author, category, published_date }) => {
    return (
        <div key={id}>
            <div>
                <h1 className='text-xl font-bold'>
                    {title}
                </h1>
                <p className='text-[#444242]'>
                    {summary}
                </p>
                <div className='py-2 flex flex-row space-x-10'>
                    <div className='font-semibold'>
                        {author}
                    </div>
                    <div className='flex flex-col'>
                        <div className='capitalize'>
                            {category}
                        </div>
                        <div>
                            {published_date}
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider my-2"></div>
        </div>
    )
}

export default BlogTitleCard