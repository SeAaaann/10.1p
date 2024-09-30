import React, { useState } from 'react';
import { Segment, Container, Form, Button, Message } from 'semantic-ui-react';

const Footer = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/subscribe', {  // 使用完整的后端URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          firstname,
          lastname,
          email,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setError(false);
      } else {
        throw new Error('Failed to subscribe.');
      }
    } catch (error) {
      setMessage('Failed to subscribe. Please try again later.');
      setError(true);
    }
  };
  

  return (
    <Segment inverted vertical style={{ padding: '2em 0em' }}>
      <Container textAlign="center">
        <h3>Stay Connected</h3>
        <Form onSubmit={handleSubscribe} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <Form.Input
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
          <Form.Input
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
          <Form.Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" color="blue" fluid>
            Subscribe
          </Button>
        </Form>
        {message && (
          <Message
            positive={!error}
            negative={error}
            content={message}
            style={{ marginTop: '10px' }}
          />
        )}
        <p>&copy; {new Date().getFullYear()} DEV@Deakin. All Rights Reserved.</p>
      </Container>
    </Segment>
  );
};

export default Footer;
