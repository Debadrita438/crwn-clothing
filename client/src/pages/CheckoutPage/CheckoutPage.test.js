import { shallow } from 'enzyme';

import { CheckoutPage } from './CheckoutPage';

describe('CheckoutPage', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = {
            cartItems: [],
            total: 0
        };

        wrapper = shallow(<CheckoutPage { ...mockProps } />);
    });

    it('should render CheckoutPage', () => {
        expect(wrapper).toMatchSnapshot();
    });
});