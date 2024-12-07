import React from 'react'

const BlogTitleCard = ({ id, title, summary, author, category, published_date }) => {
    return (
        <div key={id}>
            <div className=''>
                <h1 className='text-xl text-[#228ed6] font-bold'>
                    {title}
                </h1>
                <p className='text-[#8f8e8e]'>
                    {summary}
                </p>
                <div className='py-2 flex flex-row space-x-10'>
                    <div className='font-semibold w-[50%] md:w-[70%]'>
                        {author}
                    </div>
                    <div className='flex flex-col'>
                        <div className='capitalize text-[#de2746]'>
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