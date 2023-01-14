import Link from "next/link";

const Post = ({post}) => {
    return (
        <div>
            {/* <h2>Title: {post.title}</h2> */}

            <div className="card mt-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <Link href={`/posts/${post?.id}`} className="card-actions justify-end">
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;