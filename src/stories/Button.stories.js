import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../components/Button";

const stories = storiesOf("Button Test", module);

stories.add("Button", () => {
  const handleClick = () => {
    alert("You clicked the button!");
  };

  return (
    <Button bgColor="white" onClick={handleClick}>
      click me
    </Button>
  );
});
