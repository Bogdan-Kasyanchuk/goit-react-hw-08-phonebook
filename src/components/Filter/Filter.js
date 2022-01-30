import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getFilter } from 'redux/contacts/contacts-selectors';
import * as actions from 'redux/contacts/contacts-action';

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 450px;
`;

const Label = styled.label`
  font-size: 18px;
`;

const Input = styled.input`
  display: inline-block;
  margin-right: 33px;
  margin-top: 5px;
  width: 78%;
  color: #202020;
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #ffffff;
  outline: none;
  :focus {
    border-color: #ff6600;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  font-size: 18px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  outline: none;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #ff6600;
    border-color: #ff6600;
  }
  :disabled {
    border: 2px solid #777777;
  }
  :disabled:hover {
    border: 2px solid #777777;
    background-color: #777777;
    color: #585858;
    cursor: not-allowed;
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
