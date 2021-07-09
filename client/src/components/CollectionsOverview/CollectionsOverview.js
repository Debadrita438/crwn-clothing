import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { CollectionPreviewContainer } from '../CollectionPreview/CollectionPreview.styles';


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export const CollectionsOverview = ({ collections }) => {
    return ( 
        <CollectionPreviewContainer>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={ id } { ...otherCollectionProps } />
                ))
            }
        </CollectionPreviewContainer>
    );
}
 
export default connect(mapStateToProps)(CollectionsOverview);