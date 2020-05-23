import React from "react"
import { PostContainer } from "../containers"

const PostPage = ({match}) => {
    return (
        <PostContainer
            groupName={(match.params.groupName)}
            categoryName={(match.params.categoryName)}
            postName={(match.params.postName)}
        />
    );
}

export default PostPage;