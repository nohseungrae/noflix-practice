import React from "react";
import styled from "styled-components";

const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Section = () => <Container>section에서 갑니다욘</Container>;

export default Section;
