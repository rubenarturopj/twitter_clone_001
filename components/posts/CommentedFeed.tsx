import CommentedItem from "./CommentedItem";

interface CommentFeedProps {
    comments?: Record<string, any>[];
}

const CommentedFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
    return (
        <>
            {comments.map((comment) => {
                <CommentedItem key={comment.id} data={comment} />;
            })}
        </>
    );
};

export default CommentedFeed;
