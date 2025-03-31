import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddFilm = ({ ajouterFilm }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");

    const handleAdd = () => {
        const newFilm = { 
          title: titre, 
          description, 
          posterURL: image, 
          rate: Number(rating) // Convertir en nombre
        };
        ajouterFilm(newFilm); // Ajouter le film
        setTitre("");
        setDescription("");
        setImage("");
        setRating("");
        handleClose();
    }

    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Ajouter un Film
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un film</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Titre</Form.Label>
              <Form.Control type="text" placeholder="Titre du film" 
                value={titre} onChange={(e) => setTitre(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description"  
                value={description} onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" placeholder="URL de l'image"  
                value={image} onChange={(e) => setImage(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control type="number" placeholder="Rating"  
                value={rating} onChange={(e) => setRating(e.target.value)} />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Fermer</Button>
            <Button variant="primary" onClick={handleAdd}>Ajouter</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default AddFilm;
