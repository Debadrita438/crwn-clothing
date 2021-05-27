import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import './CollectionsOverview.scss';


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

const CollectionsOverview = ({ collections }) => {
    return ( 
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={ id } { ...otherCollectionProps } />
                ))
            }
        </div>
    );
}
 
export default connect(mapStateToProps)(CollectionsOverview);