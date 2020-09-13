import React from 'react';
import { useSelector } from 'react-redux'
import { Comment, Avatar, Spin } from 'antd'

import { CommentsState } from '../types'
import UserInput from './UserInput'
import { RootState } from '../../../app/rootReducer'

import style from './style.module.css'

const CommentList = ({ articleId }: { articleId: string }) => {
    const { comments, loading, error } = useSelector<RootState, CommentsState>(state => state.comments)
    if (loading) {
        return (
            <Spin size='large' />
        )
    }
    if (error) {
        return (
            <p>error</p>
        )
    }
    else {
        return (
            <>
                {
                    comments?.map((comment) => {
                        return (
                            <Comment
                                className={style.comment}
                                key={comment._id}
                                author={comment.author}
                                avatar={<Avatar>{comment.author.charAt(0)}</Avatar>}
                                content={comment.text}
                            />
                        )
                    })
                }
                <UserInput newsId={articleId} />
            </>
        )
    }
}


export default CommentList;