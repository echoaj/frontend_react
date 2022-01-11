import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./AddField.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class AddField extends Component {

    constructor(props) {
        log("AddField constructor called");
        super(props);
        this.state = { data: { "item": "" } };              // data: expense object
        this.handlePost = this.handlePost.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Post expense when the form is submited
    async handlePost(event) {
        log("handlePost: called when add form submitted");
        console.log("Add Button Pressed: " + this.state.data["item"]);
        await this.props.addExpense(this.state.data);       // Calls postExpense() and sends it expense object
        this.setState({ data: { "item": "" } });            // Clearing data so no expense object
        event.preventDefault();
    }

    // Update state when the user types in the expense item
    handleChange(event) {
        log("handleChange: called when user types in add field");
        console.log("Received: " + event.target.value);
        const expense = { "item": event.target.value };     // Expense Data
        this.setState({ data: expense });                   // Setting state to object holding expense data
        console.log("State: " + this.state.data["item"]);
    }

    render() {
        log("render: add feild rendered");
        const valueItem = this.state.data.item;
        const isEmpty = valueItem === "";
        return (
            <form className="addField" onSubmit={this.handlePost}>
                <Form.Control className="addFieldForm" type="text" placeholder="Add Item" value={valueItem} onChange={this.handleChange} />
                <Button className="addFieldButton" type="submit" variant="success" disabled={isEmpty}>Add</Button>
            </form>
        );
    }
}

export default AddField;