import css from './ContactForm.module.css';
import { useId } from 'react';
import { nanoid } from 'nanoid';

export default function ContactForm({ onAdd }) {
  const id = useId();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    onAdd({
      id: nanoid(),
      name: form.elements.username.value,
      number: form.elements.phoneNumber.value,
    });

    form.reset();
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.group}>
          <label htmlFor={`name-${id}`}>Name</label>
          <input
            className={css.contactInfo}
            type="text"
            name="username"
            id={`name-${id}`}
          />
        </div>
        <div className={css.group}>
          <label htmlFor={`phoneNumber-${id}`}>Number</label>
          <input
            className={css.contactInfo}
            type="text"
            name="phoneNumber"
            id={`phoneNumber-${id}`}
          />
        </div>
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
