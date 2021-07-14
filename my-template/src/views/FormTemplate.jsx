import React from 'react'
import Form from 'react-bootstrap/Form'
import {Row, Col, Button} from 'react-bootstrap'
import { GeneralContext } from '../context/GeneralContext';
class FormTemplate extends React.Component {
    constructor(props){
        super(props);
        this.state =  {
            name: "",
            surname: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleSurname = this.handleSurname.bind(this)
    }
    componentDidMount(){
        let value = this.context;
        console.log("component did mount")
        console.log(value)
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(event)
        console.log(this.state)
        console.log(this.context)
    } 
    handleName(event){
        this.setState({name: event.target.value})
    }
    handleSurname(event){
        this.setState({surname: event.target.value})

    }
    render(){
        return (  
            <GeneralContext.Provider value={this.state}>
                <div className="FormWrapper">
                <h1>{this.state.name} - {this.state.surname}</h1>

                <Form  >
                <Row>
                    <Col>
                    <Form.Control placeholder="First name" 
                        onChange={this.handleName}/>
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" 
                        onChange={this.handleSurname}/>
                    </Col>
                </Row>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
                </Form>
                </div> 
                </GeneralContext.Provider>
            )}
}
FormTemplate.contextType = GeneralContext
export default FormTemplate