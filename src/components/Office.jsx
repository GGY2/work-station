import React from 'react';
import './Office.css';
import Card from 'react-bootstrap/Card';
import { HeartWhite } from '../icons.js';
import { addToCart } from '../features/officesSlice';
import { useDispatch } from 'react-redux';

const Office = ({id, city, rate, description, image}) => {
    const dispatch = useDispatch();
    return(
        <>
            <Card style={{ width: '18rem', border: '1px solid #ececec' }}>
                <div style={{position: 'relative'}}>
                    <Card.Img variant="top" src={image} />
                    <span className='add' onClick={() => dispatch(addToCart({id, city, rate, description, image}))} 
                    style={{position: 'absolute', top: '10px', right: '10px', width: '35px', height: '35px'}}>
                        <HeartWhite />
                    </span>
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
                </div>
                <Card.Body>
                    <Card.Title>{city}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Office;