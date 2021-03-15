import React from "react";

import { storiesOf } from "@storybook/react";

import { Input } from "../components/Input";
const stories = storiesOf("Input Test", module);

stories.add("Input", () => {
  const handleOnChange = () => {
    alert("You clicked the button!");
  };

  return <Input type="text" placeholder="Name" onChange={handleOnChange} />;
});
