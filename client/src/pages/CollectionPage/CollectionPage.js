import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import { CollectionPageContainer, CollectionPageItems, CollectionPageTitle } from './CollectionPage.styles';

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return ( 
        <CollectionPageContainer>
            <CollectionPageTitle>{ title }</CollectionPageTitle>
            <CollectionPageItems>
                {
                    items.map(item => (
                        <CollectionItem key={ item.id } item={ item } />
                    ))
                }
            </CollectionPageItems>
        </CollectionPageContainer>
    );
}
 
export default connect(mapStateToProps)(CollectionPage);