import React from 'react';
import { Card } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';
import TutorialCard from './TutorialCard';

const tutorials = Array.from({ length: 5 }).map(() => ({
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  image: `https://picsum.photos/200?random=${Math.random()}`,
}));

const Tutorials = () => (
  <div style={{ padding: '20px' }}>
    <h2>Tutorials</h2>
    <Card.Group>
      {tutorials.map((tutorial, index) => (
        <TutorialCard key={index} tutorial={tutorial} />
      ))}
    </Card.Group>
  </div>
);

export default Tutorials;
