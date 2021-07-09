import { shallow } from 'enzyme';

import { CartIcon } from './CartIcon';

describe('CartIcon Component', () => {
    let wrapper;
    let mockToggleCartHidden
    let mockItemCount = 5;

    beforeEach(() => {
        mockToggleCartHidden = jest.fn();

        const mockProps = {
            toggleCartHidden: mockToggleCartHidden,
            itemCount: mockItemCount
        };

        wrapper = shallow(<CartIcon { ...mockProps } />);
    });

    it('should render CartIcon component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call toggleCartHidden when clicked', () => {
        wrapper.find('CartIconContainer').simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalled();
    });

    it('should show the itemCount as the text', () => {
        const itemCount = parseInt(wrapper.find('ItemCountStyles').text());
        expect(itemCount).toBe(5);
    });
});