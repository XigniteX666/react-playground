import { Button } from "../components/Button";
import { TestComponent } from "../components/TestComponent/TestComponent";
import { FunctionalComponent } from "../components/FunctionalComponent/FunctionalComponent";
import { StateExampleComponent } from "../components/StateExampleComponent/StateExampleComponent";
export const TestPage = () => {
  return (
    <>
      <h1>Testing page</h1>
      <Button title="Test" />
      <TestComponent title="This is a button" />
      <FunctionalComponent title="This is a button" />
      <StateExampleComponent />
    </>
  );
};
