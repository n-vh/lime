import React, { useState } from 'react';
import Input from '~/components/input';

function Form() {
  const [nameInput, setNameInput] = useState('');
  const onChange = (str: string) => {
    setNameInput(str);
  };
  return (
    <form>
      <Input onChange={onChange} name="email" placeholder="blabliblu" value={nameInput} />
    </form>
  );
}

export default Form;
