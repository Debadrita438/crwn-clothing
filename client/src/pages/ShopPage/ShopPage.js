import { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/Spinner/Spinner';

import { fetchCollectionStart } from '../../redux/shop/shopAction';

const CollectionsOverviewContainer = lazy(() => import('../../components/CollectionsOverview/CollectionsOverview.container'));
const CollectionsPageContainer = lazy(() => import('../CollectionPage/CollectionPage.container'));

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

const ShopPage = ({ fetchCollectionStart, match }) => {
    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart]);
    
    return(
    <div className="shop-page">
        <Suspense fallback={<Spinner />}>
            <Route exact path = { `${ match.path }` } component = { CollectionsOverviewContainer } />
            <Route exact path = { `${ match.path }/:collectionId` } component = { CollectionsPageContainer }/>
        </Suspense>
    </div>
    );
}
 
export default connect(null, mapDispatchToProps)(ShopPage);