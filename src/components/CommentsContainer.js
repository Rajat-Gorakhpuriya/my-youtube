import React from 'react';
import user_icon from "../assets/user_icon.png";

const commentsData = [
    {
        name: "Rajat Gorakhpuriya",
        text:"Hello comment 1",
        replies: [
            {
                name: "Rajat Gorakhpuriya",
                text: "Hello replie1",
                replies: []
            },
            {
                name: "Rajat Gorakhpuriya",
                text: "Hello replie2",
                replies: []
            }
        ]
    },
];

const Comment = ({data}) => {
    const {name,text,replies} = data;
    return <div className='flex shadow-sm bg-gray-100 rounded-lg'>
        <img className="w-12 h-8"alt='user' src={user_icon}/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p className=''>{text}</p>
        </div>
    </div>
};

const CommentsList = ({comments}) => {
    return comments.map((c,index) => {
        return (
            <div key={index}>
                <Comment key={index} data={c}></Comment>
                <div className='pl-5 border border-l-black mt-5'>
                    <CommentsList comments={c.replies}></CommentsList>
                </div>
            </div>
        )
    })
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
          <CommentsList comments={commentsData}></CommentsList>
    </div>
  )
}

export default CommentsContainer