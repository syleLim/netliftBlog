import React from "react"
import { PostListContainer } from "../containers"
import { Route } from "react-router-dom"

const PostListPage = ({match}) => {
    return (
        <PostListContainer
            groupName={match.params.groupName}
            categoryName={match.params.categoryName}
        />
    );
}

export default PostListPage;