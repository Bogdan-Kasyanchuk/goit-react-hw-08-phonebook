import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getFilter } from 'redux/contacts/contacts-selectors';
import * as actions from 'redux/contacts/contacts-action';

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  width: 350px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 22px;
`;

const Input = styled.input`
  display: inline-block;
  margin-top: 5px;
  margin-right: 30px;
  padding: 5px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid white;
  outline: none;
  :focus {
    border-color: #318ce7;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 5px;
  :hover {
    color: white;
    background-color: #318ce7;
    border-color: #318ce7;
  }
`;

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handlerChangeInput = event => {
    dispatch(actions.filterContact(event.target.value));
  };

  const resetInput = () => {
    dispatch(actions.filterContact(''));
  };

  return (
    <Div>
      <Label>
        Find contacts by name
        <Input
          autoComplete="off"
          type="text"
          name="filter"
          value={filter}
          placeholder="Enter name"
          onChange={handlerChangeInput}
        />
      </Label>
      <Button disabled={!filter} type="button" onClick={resetInput}>
        Clear
      </Button>
    </Div>
  );
};

export default Filter;
