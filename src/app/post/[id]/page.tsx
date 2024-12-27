import React from 'react';

// Fetch function to get post details
const detailsData = async ({ id }: { id: string | number }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
};

const PostDetailspage = async ({ params }) => {
    // Ensure params.id is passed to detailsData
    const {title, body} = await detailsData({id: params.id});

    return (
        <div className=' border p-4 m-4'>
            <h1 className='text-center text-3xl text-red-600'>Post Details</h1>
             <h6> Title :   {title}</h6>
             <h6> description :   {body}</h6>
        </div>
    );
};

export default PostDetailspage;
