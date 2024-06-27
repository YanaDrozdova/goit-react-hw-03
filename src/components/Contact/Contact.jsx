import css from './Contact.module.css';

export default function Contact({ contact }) {
  return (
    <>
      <div className={css.contactInfo}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button type="button">Delete</button>
    </>
  );
}
