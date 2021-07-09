import { shallow } from 'enzyme';

import { CartItem } from './CartItem';

describe('CartItem Component', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = {
            imageUrl: 'www.testImage.com',
            price: 10,
            name: 'sneakers',
            quantity: 2
        };

        wrapper = shallow(<CartItem item={mockProps} />);
    });

    it('should render CartItem Component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should show the name given', () => {
        const name = wrapper.find('.name').text();
        expect(name).toBe('sneakers');
    });

    it('should show the quantity and price given', () => {
        const price = wrapper.find('.price').text();
        expect(price).toBe('2 X ₹10');
    });
})