import React from "react";
import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap'
import './navegacion.css'
import Carro from "./carro.js"

class Navegacion extends React.Component {
    render() {
        return (
            <Navbar className="nav" light expand="sm">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml" navbar>
                    <NavItem>
                        <Carro/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navegacion;