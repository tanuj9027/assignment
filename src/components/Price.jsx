import React,{useState} from "react";
import { Button, Modal} from "react-bootstrap";
import price  from "../Assets/Price.png";


function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../Assets", false, /\.(png|jpe?g|svg)$/)
);


// Pricing Button.

function Price(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <span>
      <img
        className="mr-1"
        src={price}
        style={{
          width: "1.8em",
          height: "1.8em",
          float: "left",
          display: "inline",
        }}
        alt="price"
      />
      <Button
        variant="light"
        style={{ color: "#57698a", textDecoration: "none", fontSize: "0.95em" }}
        onClick={handleShow} 

      >
        View Pricing
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <img className="pptt"
          src={images[props.item.image].default} alt="popupImage" />
          <div>         
          <p>{props.item.name}<br/>
          <sub>{props.item.region}</sub> </p></div>

        </Modal.Header>
        <Modal.Body>
        <h4 >Pricing</h4>
        <tr>
          <td class='left'>$ {(props.item.price)}</td>
          <td class='right'> - 1 Day</td>
        </tr>

        <tr>
          <td class='left'>$ {(props.item.price) * 5} </td>
          <td class='right'> - 5 Day</td>
        </tr>

        <tr>
          <td class='left'>$ {(props.item.price) * 30}</td>
          <td class='right'> - 30 Day</td>
        </tr>


        {/* <h5>$ {(props.item.price)} - 1 Day</h5>
        <h5>$ {(props.item.price) * 5} - 5 Days</h5>
        <h5>$ {(props.item.price) * 30} - 30 Days</h5> */}

        </Modal.Body>
        <Modal.Footer>
          <Button  className="btn-lg btn-block" variant="light" style={{ color: "#57698a",fontSize: "0.95em" }} onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </span>
  );
}

export default Price;
