import { Container as BContainer } from 'react-bootstrap';
import { Row as BRow } from 'react-bootstrap';
import { Col as BCol } from 'react-bootstrap';
import { Button as BButton } from 'react-bootstrap';
import { Form as BForm } from 'react-bootstrap';

import cl from './Auth.module.scss';

const Auth = () => {
  return (
    <BContainer style={{margin: 'auto'}}>
      <BRow className="justify-content-md-center">
      <BCol xs={6}>
        <BForm>
          <BForm.Group className="mb-3" controlId="formBasicLogin">
            <BForm.Label>Login</BForm.Label>
            <BForm.Control type="text" placeholder="Enter login" />
          </BForm.Group>

          <BForm.Group className="mb-3" controlId="formBasicPassword">
            <BForm.Label>Password</BForm.Label>
            <BForm.Control type="password" placeholder="Password" />
          </BForm.Group>
          <BButton variant="primary" type="submit">
            Submit
          </BButton>
        </BForm>
      </BCol>
      </BRow>
    </BContainer>
  );
}

export default Auth;