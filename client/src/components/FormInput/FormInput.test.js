import { shallow } from 'enzyme';

import FormInput from './FormInput';

describe('FormInput Component', () => {
    let wrapper;
    let mockHandleChange;

    beforeEach(() => {
        mockHandleChange = jest.fn();

        const mockProps = {
            handleChange: mockHandleChange,
            label: 'email',
            value: 'test@gmail.com'
        };

        wrapper = shallow(<FormInput { ...mockProps } />);
    });

    it('should render FormInput Component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call handleChange function', () => {
        wrapper.find('FormInputContainer').simulate('change');
        expect(mockHandleChange).toHaveBeenCalled();
    });

    it('should render the FormInputLabel if there is a label', () => {
        expect(wrapper.exists('FormInputLabel')).toBe(true);
    });

    it('should not render the FormInput if there is no label', () => {
        const mockProps = {
            handleChange: mockHandleChange,
            label: '',
            value: 'test@gmail.com'
        };

        const newWrapper = shallow(<FormInput { ...mockProps } />);

        expect(newWrapper.exists('FormInputLabel')).toBe(false);
    });
});