import Navigation from "../../components/Navigation";
export default function Works() {
  return (
    <>
      <Navigation contact />
        {/* scroll */}
    </>
  );
}

const ScrollSection = styled.div`
  position: fixed;
  top: 50%;
  right: 7.6rem;
  align-items: center;
  transform: translateY(-50%);
  height: 70vh;
`;

const Timeline = styled.div`
  height: 100%;
  width: 2px;
  background-color: ${(props) => props.theme.colors.light};
  z-index: -1;
`;
