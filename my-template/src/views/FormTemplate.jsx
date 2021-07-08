import React from 'react'
import Form from 'react-bootstrap/Form'
import {Row, Col, Button} from 'react-bootstrap'
class FormTemplate extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: '', surname: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleSurname = this.handleSurname.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(event)
        console.log(this.state)
    } 
    handleName(event){
        this.setState({name: event.target.value})
    }
    handleSurname(event){
        this.setState({surname: event.target.value})

    }
    render(){
        return (
                <>
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
                </>
            )}
}
export default FormTemplate