import Link from "next/link";
import classes from "../css/error.module.scss";
import {Layout} from "../components/Layout";

export default function Custom404() {
    return (
        <Layout>
            <h1 className={classes.error}>404 - Page Not Found</h1>
            <p>Please <Link href={'/'}><a>go back</a></Link> to safety</p>
        </Layout>
    )
}