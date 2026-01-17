import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog/valorant-rank-api">
            What is my rank
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/about">
            About me
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const FeatureList = [
    {
      title: 'How I host my site for under $1 per month',
      description: 'Cloudfront, S3, and Route53',
      link: '/blog/cloudfront-s3-hosting',
    },
    {
      title: 'Creating a Valorant Ranked API',
      description: 'Quickly get your Valorant rank',
      link: '/blog/valorant-rank-api',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <div key={idx} className={clsx('col col--6')}>
              <div className="text--center padding-horiz--md">
                <Heading as="h3">
                  <Link to={feature.link}>{feature.title}</Link>
                </Heading>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A blog about caffeine and coding">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
