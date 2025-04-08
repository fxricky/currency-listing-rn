import { render, screen } from "@testing-library/react-native";
import CurrencyList from "../index";
import { Currency } from "@/data/type";

const dummyData: Currency[] = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
  },
  {
    id: "2",
    name: "Ethereum",
    symbol: "ETH",
  },
];

describe("CurrencyList", () => {
  test("renders correctly with default props", () => {
    const tree = render(<CurrencyList displayList={dummyData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders EmptyState when list is empty", () => {
    render(<CurrencyList displayList={[]} />);
    expect(screen.getByTestId("currencylist#empty-state")).toBeTruthy();
  });

  test("renders correctly with different data", () => {
    const differentData: Currency[] = [
      {
        id: "3",
        name: "Ripple",
        symbol: "XRP",
      },
    ];
    const tree = render(<CurrencyList displayList={differentData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders with search bar", () => {
    const tree = render(<CurrencyList displayList={dummyData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
