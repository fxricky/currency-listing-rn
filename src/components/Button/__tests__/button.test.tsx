import { render } from "@testing-library/react-native";
import Button from "../index";

describe("Button", () => {
  test("Normal Button", () => {
    const tree = render(<Button label="Test" onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Danger Button", () => {
    const tree = render(
      <Button label="Test" onPress={() => {}} variant="danger" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Success Button", () => {
    const tree = render(
      <Button label="Test" onPress={() => {}} variant="success" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Focus Button", () => {
    const tree = render(
      <Button label="Test" onPress={() => {}} variant="focus" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
