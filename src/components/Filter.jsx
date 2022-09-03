import React from "react";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { filterOffices } from "../features/officesSlice";
import './Filter.css';

const Filter = () => {
const dispatch = useDispatch();
const { filterByCity } = useSelector((state) => state.offices);

return (
<div>
    <Form>
    <Form.Group >
        <Form.Control
        className="filter"
        type="text"
        value={filterByCity}
        placeholder="Try London..."
        onChange={(e) => dispatch(filterOffices({value: e.target.value}))}
        />
    </Form.Group>
    </Form>
</div>
);
};

export default Filter;