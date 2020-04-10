import React from 'react';

const Footer = (props) => {
    return (
        <div>
            <h3>Total Price: <span style={{color:'red'}}>{props.totalPrice}</span></h3>
        </div>
    );
}

export default Footer;