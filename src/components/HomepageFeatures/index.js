import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'User-Friendly',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ASXcelerator has been meticulously crafted to ensure effortless 
        installation and usage, enabling you to swiftly launch and 
        navigate your SAFe journey.
      </>
    ),
  },
  {
    title: 'Prioritize the Essentials',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        With ASXcelerator, direct your attention to the core aspects 
        while we handle the rest. Feel free to relocate your essential 
        materials to the designated section.
      </>
    ),
  },
  {
    title: 'Leverage Simplicity',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        ASXcelerator capitalizes on the straightforward nature of Markdown, 
        making it incredibly accessible and easy to learn, all while retaining 
        the simplicity of your chosen format.
      </>
    ),
  },
  {
    title: 'Powered by Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        ASXcelerator empowers you to enhance and tailor your content while 
        embracing the user-friendly markdown approach.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
