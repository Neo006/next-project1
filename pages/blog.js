import Link from "next/link";
import { Layout } from "../components/Layout";
import posts from "../posts.json";

const Blog = () => {
    return (
        <Layout title="Blog Page">
            <h1>Blog page</h1>

            <ul>
                {Object.entries(posts).map((value, index) => {
                    return (
                        <li key={index}>
                            <Link href="/post/[id]" as={"/post/" + value[0]}>
                                <a>{value[1].title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    )
}

export default Blog;