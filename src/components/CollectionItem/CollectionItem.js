import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cartAction';

import { 
    CollectionItemContainer, 
    CollectionItemImage, 
    CollectionFooterContainer, 
    NameStyles, 
    PriceStyles, 
    AddButton 
} from './CollectionItem.styles';

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <CollectionItemImage
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <CollectionFooterContainer>
                <NameStyles>{ name }</NameStyles>
                <PriceStyles>{ price }</PriceStyles>
            </CollectionFooterContainer>
            <AddButton onClick={ () => addItem(item) } inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer> 
    )
};
 
export default connect(null, mapDispatchToProps)(CollectionItem);