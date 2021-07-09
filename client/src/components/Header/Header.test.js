import { shallow } from 'enzyme';

import { Header } from './Header';
import { CartDropdown } from '../CartDropdown/CartDropdown';

describe('Header Component', () => {
    let wrapper;
    let mockSignOutStart;

    beforeEach(() => {
        mockSignOutStart = jest.fn();

        const mockProps = {
            currentUser: {
                uid: 123
            },
            hidden: true,
            signOutStart: mockSignOutStart
        };

        wrapper = shallow(<Header { ...mockProps } />);
    });

    it('should render Header Component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('If currentUser is present', () => {
        it('should render sign out function', () => {
            expect(wrapper.find('OptionLink').at(1).text()).toBe('SIGN OUT');
        });

        it('should render signOutStart function', () => {
            wrapper.find('OptionLink').at(1).simulate('click');
            expect(mockSignOutStart).toHaveBeenCalled();
        });
    });

    describe('If currentUser is not present', () => {
        it('should render sign in function', () => {
            const mockProps = {
                currentUser: null,
                hidden: true,
                signOutStart: mockSignOutStart
            };
    
            const newWrapper = shallow(<Header { ...mockProps } />);
    
            expect(newWrapper.find('OptionLink').at(1).text()).toBe('SIGN IN');
        });
    });

    it('should not render the CartDropdown component if hidden is true', () => {
        const mockProps = {
            currentUser: null,
            hidden: true,
            signOutStart: mockSignOutStart
        };

        const newWrapper = shallow(<Header { ...mockProps } />);
        expect(newWrapper.exists(CartDropdown)).toBe(false);
    });
});