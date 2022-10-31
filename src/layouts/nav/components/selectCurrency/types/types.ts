export interface State {
  isOpen: boolean;
  selectValue: string;
  availableCurrencies: Currency[];
}

export interface Currency {
  label: string;
  symbol: string;
  __typename: string;
}
