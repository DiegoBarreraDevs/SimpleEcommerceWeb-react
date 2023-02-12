import React from "react";
import {
  CardImg,
  ModalBody,
  Modal,
  Container,
  Button,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import "./fichaProducto.css";
import { listaCarrito } from "../listaCarrito.json";

class FichaProducto extends React.Component {
  constructor(props) {
    super();

    this.state = {
      modal: false,
      listaCarrito,
      stock: props.props.stock,
    };

    this.toggle = this.toggle.bind(this);
    this.agregarCarrito = this.agregarCarrito.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  agregarCarrito() {
    listaCarrito.push({
      titulo: this.props.props.titulo,
      precio: this.props.props.precio,
    });
    this.setState((prevState) => ({
      modal: !prevState.modal,
      stock: prevState.stock - 1,
    }));
  }

  render() {
    return (
      <Container>
        <Button onClick={this.toggle} color="warning">Ver ficha</Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader>{this.props.props.titulo}</ModalHeader>
          <ModalBody>
            <CardImg src={this.props.props.imagen} />
            <p>El detalle del producto seleccionado es el siguiente: </p>
            {this.props.props.descripcion}
            <p>
              Este producto tiene un valor de <b>{this.props.props.precio}</b>{" "}
              dolares.
            </p>
            <p>
              Hay <b>{this.state.stock}</b> unidades de este producto
              disponibles.
            </p>
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button color="warning" onClick={this.agregarCarrito}>
              Agregar al carrito
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Volver atras
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default FichaProducto;
