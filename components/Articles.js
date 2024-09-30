import React from 'react';
import { Card } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';
import ArticleCard from './ArticleCard';

const articles = Array.from({ length: 5 }).map(() => ({
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  image: `https://picsum.photos/200?random=${Math.random()}`,
}));

const Articles = () => (
  <div style={{ padding: '20px' }}>
    <h2>Articles</h2>
    <Card.Group>
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </Card.Group>
  </div>
);

export default Articles;
