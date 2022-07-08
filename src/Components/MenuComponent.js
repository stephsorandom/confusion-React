import { Component } from 'react';
import Dishdetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedDish: null,
      };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className='col-12 col-md-5 m-1'>
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width='100%' object src={dish.image} alt={dish.name} />
            <CardImgOverlay body className='ml-5'>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    console.log('did he click me')
    return (
      <div className='container'>
        <div className='row'>
            {menu}
        </div>
        <Dishdetail dish={this.state.selectedDish}/>
        
      </div>
    );
  }
}

export default Menu;
