import { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish() {
    if (this.props.dish != null) {
      return (
        <Card>
          <CardImg
            width='100%'
            object
            src={this.props.dish.image}
            alt={this.props.dish.name}
          />
          <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return <div className='row'>{this.renderDish(this.props.dish)}</div>;
  }
}

export default Dishdetail;
