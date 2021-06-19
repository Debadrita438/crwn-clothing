import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionsPageContainer from '../CollectionPage/CollectionPage.container';

import { fetchCollectionStart } from '../../redux/shop/shopAction';


const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

const ShopPage = ({ fetchCollectionStart, match }) => {
    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart]);
    
    return(
    <div className="shop-page">
        <Route exact path = { `${ match.path }` } component = { CollectionsOverviewContainer } />
        <Route exact path = { `${ match.path }/:collectionId` } component = { CollectionsPageContainer }/>
    </div>
    );
}
 
export default connect(null, mapDispatchToProps)(ShopPage);