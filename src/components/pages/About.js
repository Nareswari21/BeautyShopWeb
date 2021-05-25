import React from 'react';
import Biodata from '../Card';
import styled from "styled-components";

const H5 = styled.h5`
 margin: center;
 color:${props => props.color};
 font-size: 50px;
 text-align: center;
`;

function About() {
  return (
    <div>
      <H5 color={"DeepPink"}>About Me!</H5>
      <Biodata />
    </div>
  );
}

export default About;
