import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '.';

const PasswordInputWrapper = styled.div`
  display: flex;

  ~ div {
    margin-bottom: 8px;
  }
`;

const PasswordInputStyled = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.button`
  cursor: pointer;
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #fff;
  font-weight: bold;
  user-select: none;
  color: #000;
`;

export function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton
          type="button"
          onClick={() => setShowPassword((current) => !current)}
        >
          {showPassword ? 'Hide' : 'Show'}
        </ToggleButton>
      </PasswordInputWrapper>

      <div>{showPassword ? props.value : ''}</div>
    </>
  );
}
