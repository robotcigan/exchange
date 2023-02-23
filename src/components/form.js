import Form from 'react-bootstrap/Form';  

export default function Test() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>$</Form.Label>
        <Form.Control type="number" value="100" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>€</Form.Label>
        <Form.Control type="number" value="94.42" />
      </Form.Group>
    </Form>
  );
}
