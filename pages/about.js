import React from 'react'
import styled from 'styled-components';

const GreenDiv = styled.div`
  width: 500px;
  height: 500px;
  background: green;
`

const About = () => (
  <main>
    <GreenDiv />
    <h1>About us</h1>
  </main>
);

export default About;
