import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

const SendMessageForm = ({ sendMessage, user }) => {
  const [message, setMessage] = useState('');

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(message, user.firstname, user.id);

        setMessage('');
      }}
    >
      <InputGroup>
        <FormControl
          type='user'
          placeholder='message...'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <Button variant='primary' type='submit' disabled={!message}>
          Send
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SendMessageForm;
