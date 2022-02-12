import styled from 'styled-components';
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from 'components/common';
import { useEffect, useState } from 'react';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: #000;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  > ${Button}:first-of-type {
    margin-top: 40px;
  }

  > ${Input} {
    margin-top: 20px;
  }
`;

let timeout;

export default function Login() {
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormFields((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    timeout = setTimeout(() => setLoading(false), 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              onChange={handleInputChange}
              value={formFields.username}
              name="username"
              placeholder="Username"
              type="text"
            />
            <PasswordInput
              onChange={handleInputChange}
              value={formFields.password}
              name="password"
            />
          </>
        )}
        <Button large disabled={loading} type="submit">
          {loading ? 'Loading' : 'Login'}
        </Button>

        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>{' '}
          </>
        )}
      </Form>
    </PageLayout>
  );
}
