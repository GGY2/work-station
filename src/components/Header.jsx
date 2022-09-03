import React from 'react';
import './Header.css';
import Filter from './Filter';
import { HeartBlue } from '../icons.js';
import { useSelector } from 'react-redux';

const Header = ({handleShow}) => {
    const { items } = useSelector((state) => state.offices);
    return(
        <>
            <div className="header">
                <img className="logo" alt="logo" src='/images/earth.png' />
                <Filter />
                <div className='favorites' onClick={handleShow} style={{position: 'relative', width: 'auto'}}>
                    <HeartBlue />
                    {items > 0 && (<span style={{
                        padding: '1px 0 0 0', 
                        backgroundColor: '#ffff', 
                        borderRadius: '50%', 
                        width: '20px',
                        height: '20px',
                        fontSize: '11px',
                        position: 'absolute',
                        top: -10,
                        right: -10,
                        fontWeight: 500
                    }}>{items}</span>)}
                </div>
            </div>
        </>
    );
};

export default Header;