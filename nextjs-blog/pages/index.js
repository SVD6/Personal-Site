import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hello, I'm Sai Vikranth. You can call me Vikranth! I'm a
                    software engineer and car enthusiast.
                </p>
            </section>
        </Layout>
    );
}
