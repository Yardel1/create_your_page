import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Url = ({site}) => (
        <Link to="/site/yarden">fds</Link>
)

class findSite extends Component {
    constructor() {
        super();
        this.state = {
            pageData: null, 
            name: "",
            waiting: false
        }
        this.UpdateState = this.UpdateState.bind(this)
        this.getData = this.getData.bind(this)
        this.handleNameInput = this.handleNameInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.determineURL = this.determineURL.bind(this)
    }

    componentDidMount(){ this.updateState() }
    componentWillReceiveProps(){ this.updateState() }

    getData(name) {
        axios.get(`http://localhost:3001/web/yarden`) //will be set to ${name}
        .then(res => this.setState({pageData: res.data, waiting:false}))
    }
    handleNameInput(event) {
        event.preventDefault();
        if (!isNaN(Number(event.target.value))||this.target.value.length > 15||this.state.waiting)
            return
        this.setState({name: event.target.value})
    }
    onSubmit() {
        if (this.state.name === null)
            return
        this.setState({waiting: true})
        this.getData(this.state.name)
    }
    determineURL() {
        if (!this.state.pageData && !this.state.waiting)
            return ("")
        if (this.state.waiting)
            return <h3>Loading</h3>
        return <Url site={this.state.pageData} />
    }
    render() {
     return (
        <div>
            <h2>Enter your name here</h2>
            <div className='username'>
                <input placeholder="e.g johnSmith" type="text" onChange = {this.handleNameInput} value = {this.state.name}></input>
                <button onClick = {this.onSubmit}>SUBMIT</button>
                {this.determineURL()}
            </div>
        </div>
    )
    }
}
export default findSite;

/* 

Vision:

Enter your name: ______

your site url is:[       ] / does not exist

user enters his name. he is limited to non numerical characters
input is placed in state
As long as the state is not empty, 
    on Submit will perform an axios call
    to check whether a site exists for the given name
    if a site exists, 
        a url to reach it will be returned 
        and displayed to the user. 
    

MVP:
user enters name and clicks submit
option1: display "no such page name"
option2: page url is provided.  (Link)

*/