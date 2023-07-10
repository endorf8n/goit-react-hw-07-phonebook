import PropTypes from 'prop-types';
import { ContactItemStyled, DeleteBtnStyled } from './contactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/thunks';

export const ContactListItem = ({ id, name, phone, index }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemStyled>
      {index + 1}. {name}: {phone}
      <DeleteBtnStyled
        type="button"
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </DeleteBtnStyled>
    </ContactItemStyled>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
