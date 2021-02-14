import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBarang, deleteBarang } from '../store/actions/index'
import './home.css'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'

export default function Home() {

  const barangs = useSelector(({ barang }) => barang.Barang)
  const [barangState, setBarangState] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBarang())
  }, [dispatch])

  useEffect(() => {
    setBarangState(barangs)
  }, [barangs])

  function handleDeleteBarang(id){
    dispatch(deleteBarang(id))
  }

  return (
    <>
      <Container>
        <Row>
          {barangState.map((barang) => {
            return (
              <Col>
                <Card key={barang.id} style={{ width: '18rem' }}>
                  <Card.Header>
                    <Button onClick={() => handleDeleteBarang(barang.id)}>Delete</Button>
                  </Card.Header>
                  <Card.Img variant="top" src={barang.image_url} />
                  <Card.Body>
                    <h5>Nama Barang</h5>
                    <p>{barang.nama}</p>
                    <h5>Harga</h5>
                    <p>{barang.harga}</p>
                    <h5>Stock</h5>
                    <p>{barang.stock}</p>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}