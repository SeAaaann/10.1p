import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const TutorialCard = ({ tutorial }) => (
  <Card>
    <Image src={tutorial.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{tutorial.title}</Card.Header>
      <Card.Description>{tutorial.description}</Card.Description>
    </Card.Content>
  </Card>
);

export default TutorialCard;
