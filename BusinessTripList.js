import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import BusinessTripCard, {Get} from './BusinessTripCard';

class BusinessTripList extends Component{
    state = {
        businessTrips: [],
      };
      componentDidMount(){
        const businessTrips = Get()
        this.setState({businessTrips})
      }
      render() {
        return(
            <View>
                <FlatList
                data={this.state.businessTrips}
                renderItem={({item}) => <BusinessTripCard item={item}></BusinessTripCard>}
                ></FlatList>
            </View>
        )
      }
}

export default BusinessTripList;