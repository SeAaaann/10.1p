import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ArticleCard = ({ article }) => (
  <Card>
    <Image src={article.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{article.title}</Card.Header>
      <Card.Description>{article.description}</Card.Description>
    </Card.Content>
  </Card>
);

export default ArticleCard;
