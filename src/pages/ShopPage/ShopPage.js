import { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionsPageContainer from '../CollectionPage/CollectionPage.container';

import { fetchCollectionAsync } from '../../redux/shop/shopAction';


const mapDispatchToProps = dispatch => ({
    fetchCollectionAsync: () => dispatch(fetchCollectionAsync())
});

class ShopPage extends Component {
    componentDidMount() {
        const { fetchCollectionAsync } = this.props;
        fetchCollectionAsync();
    }

    render() {
        const { match } = this.props;

        return(
        <div className="shop-page">
            <Route exact path = { `${ match.path }` } component = { CollectionsOverviewContainer } />
            <Route exact path = { `${ match.path }/:collectionId` } component = { CollectionsPageContainer }/>
        </div>
        );
    }

}

 
export default connect(null, mapDispatchToProps)(ShopPage);