import { render } from '@testing-library/react';
import { CategoryTitle } from './index';

describe('render the right prop name', () => {
  it('should render a prop name', () => {
    const { getByText } = render(<CategoryTitle name='Test Name' />);
    const propValue = getByText(/Test Name/);
    expect(propValue).toBeInTheDocument();
  });
});
