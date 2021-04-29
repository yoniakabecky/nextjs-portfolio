import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Title>This is heading</Title>
      <Text>Hello world!</Text>
    </>
  );
}

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.accent};
  color: ${(props) => props.theme.colors.tomato};
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.light};
`;
