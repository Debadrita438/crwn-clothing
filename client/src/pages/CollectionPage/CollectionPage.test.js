import { shallow } from 'enzyme';

import { CollectionPage } from './CollectionPage';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

describe('CollectionPage', () => {
    let wrapper;
    let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
    
    beforeEach(() => {
        const mockProps = {
            title: 'Test',
            items: mockItems
        };
    
        wrapper = shallow(<CollectionPage collection={ mockProps } />);
    });

    it('should render the CollectionPage page', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the same number of CollectionItems as collection array', () => {
        expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
    });
});