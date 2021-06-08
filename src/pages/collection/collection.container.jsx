import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector'
import WithSpinner from '../../components/withSpinner/withSpinner.component'
import CollectionsOverview from '../../components/collections-overView/collections-overview.component'
import {compose} from 'redux'
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector'
import CollectionPage from './collection.component'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

