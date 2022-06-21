import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { formatDate } from './util'; 
import { Add } from "./BusinessTripService";
import DateTimePicker from "@react-native-community/datetimepicker";

class BusinessTripForm extends Component{
    state = {
        name: "",
        description: "",
        location: "",
        days: "",
        startDate: "",
        budget: "",
        showDatePicker: false
    }
    handleChangeName = (value) => {
        this.setState({name: value});
    };
    handleDatePicked = (value) => {
        const currentDate = value || this.state.startDate;
        this.setState({date: value});
        this.handleDatePickerHide()
    };
    handleDatePress = () => {
        this.setState({showDatePicker: true });
      };
      handleDatePickerHide = () => {
        this.setState({showDatePicker: false });
      };
      handleChangeDescription = (value) => {
        this.setState({description: value});
    };
    handleChangeLocation = (value) => {
        this.setState({location: value});
    };
    handleChangeDays = (value) => {
        this.setState({days: value});
    };
    handleChangeBudget = (value) => {
        this.setState({budget: value});
    };
      
    render (){
        return(
            <View>
                <TextInput
                placeholder="Име на служителя"
                value={this.state.name}
                onChangeText={this.handleChangeName}
                />
                <TextInput
                placeholder="Описание на командировката"
                value={this.state.description}
                onChangeText={this.handleChangeDescription}
                />
                 <TextInput
                placeholder="Локация"
                value={this.state.location}
                onChangeText={this.handleChangeLocation}
                />
                 <TextInput
                placeholder="Срок"
                value={this.state.days}
                onChangeText={this.handleChangeDays}
                />
                <TextInput
                placeholder="Стартова дата"
                value={formatDate(this.state.startDate)}
                editable={!this.state.showDatePicker}
                onFocus={this.handleDatePress}
                />
                {
                    this.state.showDatePicker && (
                        <DateTimePicker
                        value={this.state.startDate}
                        mode="datetime"
                        is24Hour={true}
                        onChange ={this.handleDatePicked}
                        />
                    )
                }
                <TextInput
                placeholder="Бюджет"
                value={this.state.budget}
                onChangeText={this.handleChangeBudget}
                />
            </View>
        )
    }
}

export default BusinessTripForm;