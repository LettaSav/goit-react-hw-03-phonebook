import useStyles from './useStyle';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  const classes = useStyles();
  return (
    <ul className={classes.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={classes.contact_item}>
          <p>
            {name}: {number}
          </p>
          <button className={classes.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
