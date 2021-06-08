import React,{useEffect} from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx'
import CollectionsOverviewContainer from '../../components/collections-overView/collections-overview.container'
import {Route} from 'react-router-dom';
import CollectionPageContainer from "../collection/collection.container";
import {firestore,convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions'
import {selectIsCollectionFetching,selectIsCollectionsLoaded} from '../../redux/shop/shop.selector'

import WithSpinner from '../../components/withSpinner/withSpinner.component'




const ShopPage = ({fetchCollectionsStartAsync,match}) =>{
   
    useEffect(() => {
        fetchCollectionsStartAsync()
    },[fetchCollectionsStartAsync]);

    // componentDidMount(){
    //    const {fetchCollectionsStartAsync} = this.props;
    //    fetchCollectionsStartAsync();
       
    // };


    

        
      
        return(
            <div className='shop-page'>
<Route exact path={`${match.path}`} component = {CollectionsOverviewContainer}/>
<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />          
 </div>
        );
    
        

}



const mapDispatchToProps = dispatch => ({
fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null,mapDispatchToProps)(ShopPage);
