import { shallow } from 'enzyme';

import { CollectionItem } from './CollectionItem';

describe('CollectionItem Component', () => {
    let wrapper;
    let mockAddItem;
    let mockImageUrl = 'www.testImage.com';
    let mockName = 'sneakers';
    let mockPrice = 10;
    beforeEach(() => {
        mockAddItem = jest.fn();

        const mockProps = {
            item: { 
                name: mockName,
                price: mockPrice,
                imageUrl: mockImageUrl
            },
            addItem: mockAddItem
        };

        wrapper = shallow(<CollectionItem { ...mockProps } />);
    });

    it('should render CollectionItem Component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the image', () => {
        expect(wrapper.find('CollectionItemImage').prop('imageUrl')).toBe(mockImageUrl);
    });

    it('should render the name', () => {
        expect(wrapper.find('NameStyles').text()).toBe(mockName);
    });

    it('should render the price', () => {
        expect(parseInt(wrapper.find('PriceStyles').text())).toBe(mockPrice);
    });

    it('should add an item to cart when addItem is called', () => {
        wrapper.find('AddButton').simulate('click');
        expect(mockAddItem).toHaveBeenCalled();
    });
});