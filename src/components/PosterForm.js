import React, { Component } from 'react';
import {Jumbotron , Input, Button} from 'reactstrap'
import {connect} from 'react-redux'


class PosterForm extends Component {
    state={
      name:"",
      subject:"",
      content:""
    }

    handleOnChange = (e) => {
        const {name, value} = e.target
          this.setState({[name]:value})
          
        }
        handleOnSubmit= ()=>{
  
          let validEntries=true;
          if(!this.state.name){
             validEntries = false
            alert('Please enter a Name')
          }else if(!this.state.subject){
            validEntries = false
            alert('Please enter a subject')
          }else if(!this.state.content){
            validEntries = false
            alert('Please enter a Message')
          }
          if(validEntries){
            this.props.addPost({
              name:this.state.name,
              subject:this.state.subject,
              content:this.state.content
            })
            this.setState({
              name:"",
              subject:"",
              content:""
            })
          }
  
        }

      render(){


        return (
        <Jumbotron >
        <div className="row">
          <div className="col-12">
            <h1 className="text-muted">Poster Application</h1>

          </div>
        </div>
        <div className="form">
          <div className="form-group">
            <Input placeholder="Name" type="text" name="name" onChange={this.handleOnChange} value={this.state.name}/>
          </div>
          <div className="form-group">
            <Input placeholder="Subject" type="text" name="subject" onChange={this.handleOnChange} value={this.state.subject}/>
          </div>
          <div className="form-group">
            <Input placeholder="Message" type="text" name="content" onChange={this.handleOnChange} value={this.state.content}/>
          </div>
          <Button color="primary" name="submit" onClick={this.handleOnSubmit}>Submit</Button>
          
        </div>


      </Jumbotron>
        )
      }
    }
    const mapStateToProps = (state) => {
        return {
          posts: state.posts
        }
      }
      const mapDispatchToProps = (dispatch)=> {
        return {
          addPost : (post) => { dispatch({
            type:'ADD_POST',
            name:post.name,
            subject: post.subject,
            content:post.content
          })}
          
        }
      
      }

    export default connect(mapStateToProps,mapDispatchToProps)(PosterForm);
