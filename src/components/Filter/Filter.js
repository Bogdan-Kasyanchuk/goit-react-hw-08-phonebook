import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getFilter } from 'redux/contacts/contacts-selectors';
import * as actions from 'redux/contacts/contacts-actions';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  width: 350px;
`;

const P = styled.p`
  margin-bottom: 5px;
  font-size: 22px;
  text-align: center;
`;

const Input = styled.input`
  display: inline-block;
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
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handlerChange = event => {
    dispatch(actions.filterContact(event.target.value));
  };

  const clear = () => {
    dispatch(actions.filterContact(''));
  };

  return (
    <Div>
      <P>Find contacts by name</P>
      <label>
        <Input
          autoComplete="off"
          type="text"
          name="filter"
          value={filter}
          placeholder="Enter name"
          onChange={handlerChange}
        />
      </label>
      <Button disabled={!filter} type="button" onClick={clear}>
        Clear
      </Button>
    </Div>
  );
};

export default Filter;
