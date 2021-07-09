import { shallow } from 'enzyme';

import { MenuItem } from './MenuItem';

describe('MenuItem Component', () => {
    let wrapper;
    let mockHistory;
    let mockMatch;
    let linkUrl = '/womens';
    let imageUrl = 'www.testImage.com';
    let size = 'large';

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        };

        mockMatch = {
            url: '/shop'
        };

        const mockProps = {
            title: 'Womens',
            imageUrl,
            size,
            history: mockHistory,
            linkUrl,
            match: mockMatch
        };

        wrapper = shallow(<MenuItem { ...mockProps } />);
    });

    it('should render MenuItem Component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call history.push with the right string when the MenuItemContainer is clicked', () => {
        wrapper.find('MenuItemContainer').simulate('click');
        expect(mockHistory.push).toHaveBeenCalledWith(`${ mockMatch.url }${ linkUrl }`);
    });

    it('should show the proper size', () => {
        expect(wrapper.find('MenuItemContainer').prop('size')).toBe(size);
    });

    it('should render the proper image', () => {
        expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(imageUrl);
    });


});