import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {formatDate} from 'util';

export default function BusinessTripCard(item){
  return(
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Location: {item.location}</Text>
      <Text>Days: {item.days}</Text>
      <Text>Start date: {item.startDate}</Text>
      <Text>Budget: {item.budget}</Text>
    </View>

  )
}