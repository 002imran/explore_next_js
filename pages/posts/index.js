import Post from "../../Components/Post";

/* eslint-disable react/jsx-key */
const Posts = ({posts}) => {
    console.log(posts);
    return (
        <div>
            <h2 className="text-2xl">The number of posts {posts.length}</h2>
             {
                posts.map(post => <Post key={post.id} post={post}></Post>)
             }
        </div>
    );
};

export default Posts;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();
    
    return {
        props: {
            posts: data
        }
    }
}