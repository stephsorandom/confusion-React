import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
  return (
    <div className='col-12 col-md-5 m-1'>
      <Card>
        <CardImg width='100%' src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

const Dishdetail = (props) => {
  if (props.dish == null) {
    return <div></div>;
  }

  function RenderComments({ comments, onClick }) {
    if (comments != null) {
    }
    return (
      <div className='col-12 col-md-5 m-1' onClick={() => onClick(comments.id)}>
        <h4>Comments</h4>
        {/* <ul className='list-unstyled'>{cmnts}</ul> */}
      </div>
    );
  }

  const Cmnt = (props) => {
    const cmnts = props.comments.map((comment) => {
      return (
        <div key={comment.id}>
          <div>{comment.comment}</div>
          <div>
            -- {comment.author},
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            }).format(new Date(comment.date))}
          </div>

          <div className='row'>{cmnts}</div>
        </div>
      );
    });
  };

  return (
    <div className='container'>
      <div className='row'>
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.comments} />
      </div>
    </div>
  );
};

export default Dishdetail;
