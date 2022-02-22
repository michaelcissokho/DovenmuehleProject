import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import addString from './addString';

const NewStringPage = () => {
  const INITIAL_VALUES = { string: '' };

  const [theme, setTheme] = useState('light');
  const [formData, setFormData] = useState(INITIAL_VALUES);

  // passes prop type of theme to input component
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  // handles change of characters to form item
  const handleChange = e => {
    setFormData({ string: e.target.value });
  };

  // handles submission of form
  const handleSubmit = e => {
    e.preventDefault();
    const { string } = formData;
    addString(string);
    // eslint-disable-next-line no-alert
    alert('String Has Been Added');
    setFormData(INITIAL_VALUES);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Add A New String:</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <Input
            theme={theme}
            placeholder="New String"
            value={formData.string}
            onChange={handleChange}
            name="string"
            data-testid="inputBox"
          />
          <button type="submit"> Submit </button>
        </form>
        <h3>{theme.toUpperCase()} mode</h3>
        <button type="button" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>

      <br />

      <Link to="/"> View All Strings </Link>
    </div>
  );
};

export default NewStringPage;
