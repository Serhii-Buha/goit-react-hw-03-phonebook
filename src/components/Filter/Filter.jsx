import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export const Filter = ({ value, onChange }) => {
  return (
    <Form.Group controlId="formFilter">
      <Form.Label className="mb-2 fs-5">Find contacts by name</Form.Label>
      <Form.Control
        type="search"
        name="filter"
        value={value}
        onChange={onChange}
      ></Form.Control>
    </Form.Group>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
