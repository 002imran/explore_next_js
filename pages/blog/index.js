import Head from "next/head";
import Link from "next/link";
const Blog = () => {
    return (
        <div>
            <Head>
                <title>blog page</title>
            </Head>
            <h2>This is blog page</h2>
            <Link href="/blog/blog1">
                Blog Page 1
            </Link>
            
        </div>
    );
};

export default Blog;