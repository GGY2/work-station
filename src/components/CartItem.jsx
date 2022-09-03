import React from 'react';
import { Card } from 'react-bootstrap';
import { Trash } from '../icons';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/officesSlice';

const CartItem = ({city, description, rate, image, id}) => {
    const dispatch = useDispatch();
    return(
        <>
            <Card style={{ 
                width: '18rem', 
                paddingBottom: '20px' 
                }}>
                <div style={{position: 'relative'}}>
                <Card.Img variant="top" src={image} />
                <span style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '15px',
                    padding: '5px 15px',
                    backgroundColor: '#ffff',
                    borderRadius: '20px',
                    fontWeight: 500, 
                    fontSize:'14px'
                }}>${rate} / person</span>
                <span onClick={() => dispatch(removeFromCart(id))}
                    style={{position: 'absolute', top: '10px', right: '10px', width: '30px', height: '30px'}}>
                    <Trash />
                </span>
                </div>
                <Card.Body>
                    <Card.Title style={{fontWeight: 700}}>{city}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default CartItem;