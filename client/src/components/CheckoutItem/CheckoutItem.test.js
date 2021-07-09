import { shallow } from 'enzyme';

import { CheckoutItem } from './CheckoutItem';

describe('CheckoutItem Component', () => {
    let wrapper;
    let mockClearItem;
    let mockAddItem;
    let mockRemoveItem;

    beforeEach(() => {
        mockClearItem = jest.fn();
        mockAddItem = jest.fn();
        mockRemoveItem = jest.fn();

        const mockProps = {
            cartItem: {
                imageUrl: 'www.testImage.com',
                price: 10,
                name: 'sneakers',
                quantity: 2
            },
            clearItem: mockClearItem,
            addItem: mockAddItem,
            removeItem: mockRemoveItem
        }

        wrapper = shallow(<CheckoutItem { ...mockProps } />);
    });


    it('should render the CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the removeItem method when left arrow is clicked', () => {
        wrapper.find('QuantityStyles').childAt(0).simulate('click');
        expect(mockRemoveItem).toHaveBeenCalled();
    });

    it('should render the addItem method when right arrow is clicked', () => {
        wrapper.find('QuantityStyles').childAt(2).simulate('click');
        expect(mockAddItem).toHaveBeenCalled();
    });

    it('should render the clearItem method when cross is clicked', () => {
        wrapper.find('RemoveButtonStyles').simulate('click');
        expect(mockClearItem).toHaveBeenCalled();
    });
});