import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {

    const onAdd = (p) => {
        (p == 1) ? (console.log(`Se agregó ${p} producto al carrito`)) :
          (console.log(`Se agregaron ${p} productos al carrito`))
        }
  return (
   <>
                <div className='detail-img'>
                <img variant="top" src={item.thumbnail} />
                </div>
                {    
                
                 item.thumbnail ?
                <Card style={{ width: '35rem' }} className='col-lg-6'>
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush align-items-center">
                    <ListGroup.Item>{item.condition}</ListGroup.Item>
                    <ListGroup.Item>{item.available_quantity}</ListGroup.Item>
                    <ListGroup.Item>${item.price}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                    <ItemCount ini= {1} stock= {item.available_quantity} onAdd= {onAdd} />
                    </Card.Body>
                </Card>

                :
                <p>Cargando contenido</p>
                }  
   </>
  )
}

export default ItemDetail;