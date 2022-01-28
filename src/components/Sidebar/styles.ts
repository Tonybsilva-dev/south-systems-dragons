import styled from 'styled-components';

export const Container = styled.div`
    width: 320px;
    background: #FFF;
    box-shadow: 0 0 14px 0 rgba(0,0,0,0.02);
    border-radius: 2px;
    padding: 30px 20px;
`

export const Form = styled.form`
    margin-top: 30px;

    button {
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #e02041;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
    }
`

export const InputBlock = styled.div`
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;

    label {
        color: #ACACAC;
        font-size: 14px;
        font-weight: bold;
        display: block;
    }
    input {
        width: 100%;
        height: 32px;
        font-size: 14px;
        color: #666;
        border: 0;
        border-bottom: 1px solid #eee;
    }

    textarea {
        width: 100%;
        height: 32px;
        font-size: 14px;
        color: #666;
        border: 0;
        border-bottom: 1px solid #eee;
    }
`;
