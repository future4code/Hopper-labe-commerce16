import React from "react";
import CartItems from "./CartItems";
import Courses from "./Courses";
import NavBar from "./NavBar";

const ShoppingCart = () => {
    return (
        <>
        <NavBar />
        <Courses />
        <CartItems />
        </>
    );
};

export default ShoppingCart;