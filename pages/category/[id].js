import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData, getAllPostIds } from '../../lib/category';
import Link from 'next/link';
import Date from '../../components/date';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: 'blocking',
    };
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Post({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{allPostsData.id}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Jie Cai a doctor candidate in pku.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Article</h2>
        <div className={utilStyles.divItem}>
          {allPostsData.map(({ id, date, title }) => (
            <div className={utilStyles.listItem} key={id}>
              <Link href={`/category/${id}`}>
                <a>{title}</a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}