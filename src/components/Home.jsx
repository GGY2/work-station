import React, {useState} from 'react';
import './Home.css';
import Office from './Office';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import Header from './Header';
import Customers from './Customers';

const Home = () => {
    const { offices } = useSelector((state) => state.offices);
    const { cart } = useSelector((state) => state.offices);
    const { filterByCity } = useSelector((state) => state.offices);
    const [showDiv, setShowDiv] = useState();
    const handleShow = () => {
        setShowDiv(!showDiv);   
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });   
    }
    
    return(
        <>
        <Header handleShow={handleShow}/>
        {showDiv ? (<div style={{
            height: 'auto', 
            backgroundColor: 'dodgerblue',
            }}>
            <div className="cart">
                <h2>{cart.length === 0 ? 'Your cart is empty' : 'Your favorites'}</h2>
                <div className='cart-container'>
                {
                    cart.map((item) => {
                        return(
                            <CartItem key={item.id} {...item} />
                        )
                    })
                }
                </div>
            </div>
            </div>) : null}
            <div className="introduction">
                <div className="left">
                    <div className="image-container">
                        <img src="./images/office.jpg" alt="businessman" />
                    </div>
                </div>
                <div className="right">
                    <h2>Rent high-ranked offices around the globe. <span style={{color: 'dodgerblue'}}>NO FEES</span>. <span style={{color: 'dodgerblue'}}>FOREVER</span>.</h2>
                </div>
            </div>
            <div className="offices">
                <h2>Choose among the {offices.length} cities worldwide</h2>
                <div className='offices-container'>
                {
                    offices.filter((item) => {
                        return (
                            item.city.trim().toLowerCase().includes(filterByCity.trim().toLowerCase())
                            );
                    })
                    .map((office) => {
                        return(
                            <Office key={office.id} {...office} />
                        )
                    })
                }
                </div>
            </div>
            <Customers />
        </>
    );
};

export default Home;