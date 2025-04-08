import { render } from "@testing-library/react-native";
import CurrencyListItem from "../index";
import { Currency } from "@/data/type";

const dummyData: Currency = {
  id: "1",
  name: "Bitcoin",
  symbol: "BTC",
};

describe("CurrencyListItem", () => {
  test("CurrencyListItem", () => {
    const tree = render(<CurrencyListItem data={dummyData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
