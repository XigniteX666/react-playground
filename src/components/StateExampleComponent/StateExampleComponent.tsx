import { useState } from "react";
import { Panel } from "./Panel";

export interface Action {
  type: string;
  payload?: any;
}

export const StateExampleComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName;
  const [activeIndex, setActiveIndex] = useState(0);

  function handleFirstNameChange(e: React.FormEvent<HTMLInputElement>) {
    setFirstName(e.currentTarget.value);
  }

  function handleLastNameChange(e: React.FormEvent<HTMLInputElement>) {
    setLastName(e.currentTarget.value);
  }

  return (
    <>
      <h1>State examples</h1>
      <h2>Example 1: Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
      <h2>Example 2: Elevate State</h2>
      <Panel
        title="Panel 1"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        This is some text in Panel 1
      </Panel>
      <Panel
        title="Panel 2"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        This is some text in Panel 2
      </Panel>
    </>
  );
};
