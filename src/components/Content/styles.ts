import styled from 'styled-components';

export const Container = styled.div`
    float: 1;
    margin-left: 30px;
    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        list-style: none;
    }
`;
