import { shallow } from 'enzyme';

import { CollectionPreview } from './CollectionPreview';

describe('CollectionPreview Component', () => {
    let wrapper;
    let mockHistory;
    let mockTitle = 'Hats';
    let mockMatch;
    let mockRouteName = 'hats';

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        };

        mockMatch = { 
            path: '/shop'
        };

        const mockProps = {
            title: mockTitle,
            items: [],
            history: mockHistory,
            match: mockMatch,
            routeName: mockRouteName
        };

        wrapper = shallow(<CollectionPreview { ...mockProps } />);
    });

    it('should render the CollectionPreview Component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the collection preview page of the title', () => {
        wrapper.find('TitleStyles').simulate('click');
        expect(mockHistory.push).toHaveBeenCalledWith(`${ mockMatch.path }/${ mockRouteName }`);
    });
});