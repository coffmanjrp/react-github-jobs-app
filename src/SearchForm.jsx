import { Col, Form } from 'react-bootstrap';

const SearchForm = ({ params, onParamChange }) => {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={params.description}
            onChange={onParamChange}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={params.location}
            onChange={onParamChange}
          />
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check
            type="checkbox"
            label="Only Full Time"
            name="full_time"
            value={params.full_time}
            id="full_time"
            className="mb-2"
            onChange={onParamChange}
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
