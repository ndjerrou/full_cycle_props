import { useState } from 'react';

const Select = ({ onSelectSquare }) => {
  const [square, setSquare] = useState('');

  const handleChange = e => {
    setSquare(e.target.value); // code asynchrone ou non bloquant
    onSelectSquare(e.target.value);
  };
  return (
    <select style={{ padding: '10px' }} value={square} onChange={handleChange}>
      <option>---Sélectionner un carré----</option>
      <option value='1'>Square 1</option>
      <option value='2'>Square 2</option>
      <option value='3'>Square 3</option>
    </select>
  );
};

export default Select;
