import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import usePost from "@/hooks/usePost";

import Header from "@/components/Header";
import Form from "@/components/Form";
import PostItem from "@/components/posts/PostItem";
import CommentedFeed from "@/components/posts/CommentedFeed";
import { stringify } from "querystring";

const PostView = () => {
    const router = useRouter();
    const { postId } = router.query;
    console.log("----> this is my post id in pages/posts/[postId].tsx");
    console.log(postId);

    const { data: fetchedPost, isLoading } = usePost(postId as string);

    if (isLoading || !fetchedPost) {
        return (
            <div className="flex justify-center items-center h-full">
                <ClipLoader color="lightblue" size={80} />
            </div>
        );
    }

    return (
        <>
            <Header showBackArrow label="Tweet" />
            <PostItem data={fetchedPost} />
            <Form
                postId={postId as string}
                isComment
                placeholder="Tweet your reply"
            />
            <CommentedFeed comments={fetchedPost?.comments} />
            {/* <p>{stringify(fetchedPost)}</p> */}
        </>
    );
};

export default PostView;
