import React, { ReactElement } from "react";
import SocialIcons from "./SocialIcons";
import { Root, Heading, Text, LineBreak } from "./TopPageContent";

export default function ContactPageContent(): ReactElement {
  return (
    <Root>
      <Heading>
        See you somewhere <br />
        in the world
      </Heading>

      <Text>
        I am a traveller, beer lover and Front-end Developer. <LineBreak />
        Open for full-time roles & freelance projects anywhere in the world.{" "}
        <br />
        Please contact me, say hello, or anything.
      </Text>

      <SocialIcons full />
    </Root>
  );
}
