import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;