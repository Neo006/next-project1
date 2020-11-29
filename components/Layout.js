import Head from "next/head";
import Link from "next/link";

export function Layout({children, title = 'Next App'}) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/blog'}><a>Blog</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx> {`
                nav {
                    position: fixed;
                    left: 0;
                    top: 0;
                    right: 0;
                    height: 60px;
                    background: #5b5c5c;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                nav a {
                    color #fff;
                    text-decoration: none;
                }   
                main {
                    margin-top: 60px;
                    padding: 1rem;
                } 
            `}</style>
        </>
    )
}