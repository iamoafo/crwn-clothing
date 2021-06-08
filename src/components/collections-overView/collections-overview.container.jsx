import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector'
import WithSpinner from '../withSpinner/withSpinner.component'
import CollectionsOverview from '../collections-overView/collections-overview.component'
import {compose} from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;