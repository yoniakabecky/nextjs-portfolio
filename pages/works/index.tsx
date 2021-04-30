import styled from "styled-components";
import Navigation from "../../components/Navigation";
import Showcase from "../../components/Showcase";

// TODO: will use some headless cms, just temporarily
import works from "../../contents/works.json";

export default function Works() {
  return (
    <>
      <Navigation contact />

      <section>
        <Heading>My Works</Heading>
        {works.map((work, i) => (
          <Showcase {...work} key={`work-${i}`} />
        ))}

        <TimeLine>
          <Axis />

          {/* scroll */}
        </TimeLine>
      </section>
    </>
  );
}

const Heading = styled.h1`
  display: none;
`;

const TimeLine = styled.div`
  position: fixed;
  top: 50%;
  right: 7.6rem;
  align-items: center;
  transform: translateY(-50%);
  height: 70vh;
`;

// TODO: axis has to be under the circle...
const Axis = styled.div`
  height: 100%;
  width: 2px;
  background-color: ${(props) => props.theme.colors.light};
`;
