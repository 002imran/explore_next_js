import { useRouter } from "next/router";

const blogId = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const id = router.query.blogId
    return (
        <div>
            <h2>This is dynamic page {id}</h2>
        </div>
    );
};

export default blogId;