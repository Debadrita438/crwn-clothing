import { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/Firebase';

import CollectionPage from '../CollectionPage/CollectionPage';

import { updateCollections } from '../../redux/shop/shopAction';

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return(
        <div className="shop-page">
            <Route 
                exact path = { `${ match.path }` } 
                render = {props => <CollectionsOverviewWithSpinner isLoading={ loading } { ...props } />} 
            />
            <Route 
                exact path = { `${ match.path }/:collectionId` } 
                render = {props => <CollectionPageWithSpinner isLoading = { loading } { ...props } />}
            />
        </div>
        );
    }

}

 
export default connect(null, mapDispatchToProps)(ShopPage);