import React from "react";
import styled from "@emotion/styled";
import Cards from '../src/Cards'

const Card = () => {
  return (
    <>
      <Container>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      </Container>
    </>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  background: grey;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  
`;
