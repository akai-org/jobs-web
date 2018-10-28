import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { StoryInfo } from "../../../.storybook/utils";
import LinkCTA from "./index";

const clickStandardLinkAction = action("clickStandardLinkAction");
const clickPrimaryLinkAction = action("clickPrimaryLinkAction");

storiesOf("LinkCTA", module)
  .addWithJSX(
    "standard LinkCTA",
    StoryInfo(
      null, // component description
      true, // true - show inline, false - show button
      true, // show/hide header
      true // show/hide component source
    )(() => <LinkCTA onClick={clickStandardLinkAction}>Standard Link</LinkCTA>)
  )
  .addWithJSX(
    "primary LinkCTA",
    StoryInfo(
      null, // component description
      true, // true - show inline, false - show button
      true, // show/hide header
      true // show/hide component source
    )(() => (
      <LinkCTA primary onClick={clickPrimaryLinkAction}>
        Primary Link
      </LinkCTA>
    ))
  );
