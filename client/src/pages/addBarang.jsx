import React, { useState } from 'react'
import { addBarang } from '../store/actions/index'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'

export default function AddBarang() {

  const [inputNama, setInputNama] = useState('')
  const [inputHarga, setInputHarga] = useState(0)
  const [inputStock, setInputStock] = useState(0)
  const [inputImage, setInputImage] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    const newBarang = {
      nama: inputNama,
      harga: inputHarga,
      stock: inputStock,
      image_url: inputImage
    }
    dispatch(addBarang(newBarang))
    history.push('/')
  }

  return (
    <>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Barang</Form.Label>
            <Form.Control type="text" placeholder="Nama Barang" value={inputNama} onChange={(e) => setInputNama(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Harga</Form.Label>
            <Form.Control type="number" placeholder="Harga" value={inputHarga} onChange={(e) => setInputHarga(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Stock</Form.Label>
            <Form.Control type="number" placeholder="Stock" value={inputStock} onChange={(e) => setInputStock(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Foto</Form.Label>
            <Form.Control type="text" placeholder="Image Url" value={inputImage} onChange={(e) => setInputImage(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e) }>
            Submit
          </Button>
        </Form>
      </Container>

    </>
  )
}