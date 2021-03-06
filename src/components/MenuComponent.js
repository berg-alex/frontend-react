import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
var dateFormat = require("dateformat");
var now = new Date();
class Menu extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
          }   
          console.log('Menu component constructor is invoked');
        }
        
        componentDidMount() {
            console.log('Menu Component componentDidMount is invoked')
        }

        onDishSelect(dish) {
            this.setState({selectedDish: dish});
        }

        renderDish(dish) {
            if(dish != null) {
                return(
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            <Card>
                                <CardImg width='100%' src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            <Card>
                                <CardImg width='100%'/>
                                <CardBody>
                                    <CardTitle><h5>Comments</h5></CardTitle>
                                    {dish.comments.map(commentObj => 
                                    { return <CardText>{commentObj.comment} <br/> {'--'}{commentObj.author} {', '} {dateFormat(commentObj.date, 'mmm, dd, yyyy')} </CardText> })}
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                );
            }
            else {
                return(
                    <div></div>
                )
            }
        }
    

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log('Menu component render is invoked');

        return ( 
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <div className='row'>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;