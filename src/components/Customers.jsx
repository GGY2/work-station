import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Customers = () => {
    const [counter, setCounter] = useState(12549);
    useEffect(() => {
        const intervals = [800, 2000, 200, 50, 100, 1000, 1500, 10, 500];
        const random = Math.floor(Math.random() * intervals.length);

        let interval = setInterval(() => {
            setCounter(prev => prev + 1);
        }, intervals[random]);
            return () => {
                clearInterval(interval);
            }       
    }, [counter]);

    return(
        <>
            <div style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#103152', 
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
            <h2 style={{
                color: '#ffff',
                fontSize: '35px',
                fontWeight: 'bold'
            }}>Over <span style={{color: 'dodgerblue'}}>{(counter.toLocaleString("en-US"))}</span> customers already trust us</h2>

            <Link to='/about'>
                <button type='button' style={{
                padding: '10px 20px',
                backgroundColor: 'greenyellow',
                outline: 'none',
                borderRadius: '8px',
                color: '#062039',
                border: 'none'
                }}>LEARN MORE</button>
            </Link>
        </div>
        </>
        
    );
};

export default Customers;