import React, { ReactElement } from "react";
import styled from "styled-components";
import size from "../styles/breakpoints";
import EmailIcon from "./icons/EmailIcon";
import GitHubIcon from "./icons/GitHubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import TwitterIcon from "./icons/TwitterIcon";

interface Props {
  full?: boolean;
}

interface IconWrapperProps {
  readonly color: string;
}

export default function SocialIcons({ full = false }: Props): ReactElement {
  return (
    <Root>
      {accounts.map(
        (account, i) =>
          (!account.fullOnly || full) && (
            <a href={account.href} key={`social-link${i}`} target="_blank">
              <IconWrapper color={account.color}>{account.icon}</IconWrapper>
            </a>
          )
      )}
    </Root>
  );
}

const Root = styled.div`
  margin-top: 4rem;

  a {
    margin: 0 2rem;

    :first-child {
      margin-left: 0;
    }
  }

  @media ${size.xs} {
    display: flex;
    justify-content: space-between;
    width: 80vw;

    a {
      margin: unset;
    }
  }
`;

const IconWrapper = styled.span<IconWrapperProps>`
  svg {
    transition: fill 0.3s ease;
    fill: ${(props) => props.theme.colors.light};
  }

  :hover {
    svg {
      fill: ${(props) => props.color};
    }
  }
`;

const accounts = [
  {
    href: "mailto:yoniakabecky@gamil.com",
    color: "#BB001B",
    icon: <EmailIcon />,
    fullOnly: false,
  },
  {
    href: "https://www.linkedin.com/in/yoniakabecky/",
    color: "#0072B1",
    icon: <LinkedInIcon />,
    fullOnly: false,
  },
  {
    href: "https://github.com/yoniakabecky",
    color: "#6F42C1",
    icon: <GitHubIcon />,
    fullOnly: false,
  },
  {
    href: "https://www.instagram.com/yoniakabecky/",
    color: "#FEDA77",
    icon: <InstagramIcon />,
    fullOnly: true,
  },
  {
    href: "https://twitter.com/yoniakabecky",
    color: "#1D9BF0",
    icon: <TwitterIcon />,
    fullOnly: true,
  },
];
