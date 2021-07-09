import { shallow } from 'enzyme';

import { CartDropdown } from './CartDropdown';
import CartItem from '../CartItem/CartItem';
import { toggleCartHidden } from '../../redux/cart/cartAction';

describe('CartDropdown Component', () => {
    let wrapper;
    let mockCartItems = [{ id: 1}, { id: 2}, { id: 3}];
    let mockHistory;
    let mockDispatch;

    beforeEach(() => {
        mockHistory = { 
            push: jest.fn()
        };

        mockDispatch = jest.fn();

        const mockProps = {
            cartItems: mockCartItems,
            history: mockHistory,
            dispatch: mockDispatch,
            currentUser: null
        };

        wrapper = shallow(<CartDropdown { ...mockProps } />);
    });

    it('should render CartDropdown component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render CartDropdownButton when user is logged in', () => {
        const mockProps = {
            cartItems: [],
            history: mockHistory,
            dispatch: mockDispatch,
            currentUser: {
                uid: 123
            }
        };

        const newWrapper = shallow(<CartDropdown { ...mockProps } />);
        expect(newWrapper.exists('CartDropdownButton')).toBe(true);
    });

    it('should call history.push when the button is clicked', () => {
        const mockProps = {
            cartItems: [],
            history: mockHistory,
            dispatch: mockDispatch,
            currentUser: {
                uid: 123
            }
        };
        const newWrapper = shallow(<CartDropdown { ...mockProps } />);
        newWrapper.find('CartDropdownButton').simulate('click');
        expect(mockHistory.push).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
    });

    it('should render an equal number of cartItem components as the cartItems prop', () => {
        expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
    });

    it('should render emptyMessage when the dropdown is empty', () => {
        const mockProps = {
            cartItems: [],
            history: mockHistory,
            dispatch: mockDispatch,
            currentUser: {
                uid: 123
            }
        };

        const newWrapper = shallow(<CartDropdown { ...mockProps } />);
        expect(newWrapper.exists('EmptyMessageStyles')).toBe(true);
    });
});