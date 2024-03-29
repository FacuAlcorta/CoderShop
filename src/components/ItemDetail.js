import { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemDetail = ({item}) => {
    const [itemIni, setItemIni] = useState(0)
    const global = useContext(CartContext);

    const onAdd = (qty) => {
          (qty === 1) ? (alert(`Se agregó ${qty} producto al carrito`)) :
          (alert(`Se agregaron ${qty} productos al carrito`))
          setItemIni(qty)
          global.addToCart(item, qty)
        }
        
  return (
    <>
    <div className='detail-img container-fluid'>
    <img variant="top" alt='' src={item.img} />
    
      {    
      
       item.img ?
      <Card style={{ width: '35rem' }} className='card-container container'>
          <Card.Body>
          <Card.Title><h2 style={{textDecoration: "underline"}}>{item.name}</h2></Card.Title>
          <Card.Text>
              {item.description}
          </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush align-items-center">
          <ListGroup.Item>Fabricante: {item.brand}</ListGroup.Item>
          <ListGroup.Item>Stock: {item.stock}</ListGroup.Item>
          <ListGroup.Item>Precio: ${item.price}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            {
              itemIni === 0 
            ? <ItemCount ini= {itemIni} stock= {item.stock} onAdd= {onAdd} />
            : <Link to="/cart"><button className='btn-agregar' style={{textDecoration: "none"}}>Checkout</button></Link>
            }
          </Card.Body>
      </Card>

      :
      <p>Cargando contenido</p>
      }  
      </div>
</>
  )
}

export default ItemDetail;