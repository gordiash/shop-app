import React from 'react'
import { NavLink } from "react-router-dom"

export default function ShopMenu() {
    return (
        <ul className="Shop__Menu">
        <li>
        <div>Shop by</div>
            <NavLink>Accesories</NavLink>
            <NavLink>Bottoms</NavLink>
            <NavLink>Tops</NavLink>
            <NavLink>Dresses</NavLink>
            <NavLink>Under $50</NavLink>
        </li>
            
        </ul>
    )
}
