import React from 'react';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter } from 'reactstrap';

function Post(props) {
   
  return (
    <Card className="my-3">
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle className="text-muted">This was Posted By: {props.name}</CardSubtitle>
            <CardText>{props.message}</CardText>
            <div className="row">
              <div className="col-6">
                <Button color="success" className="m-1" name="like" onClick={(e)=>props.handleOnClick(e,props.id)}>Like</Button>
                <Button color="secondary" className="m-1" name="dislike" onClick={(e)=>props.handleOnClick(e,props.id)}>Dislike</Button>
              </div>
              <div className="col-6">
                  <span>Likes:{props.likes} </span>
                  <span>Dislikes:{props.dislikes}</span>
              </div>
            </div>

          </CardBody>
          <CardFooter>
            <Button color="info" className="float-left" name="edit" onClick={(e)=>props.handleOnClick(e,props.id)} disabled>Edit</Button>
            <Button color="danger" className="float-right" name="delete" onClick={(e)=>props.handleOnClick(e,props.id)}>Delete</Button>
          </CardFooter>
        </Card>
    
  );
}

export default Post;
