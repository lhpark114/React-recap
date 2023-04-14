import React from 'react';

export default function AppForm() {
  const handleSubmit=(e) =>{
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>name:</label>
      <input type='text' id='name' name='name'/>
      <label htmlFor='email'>email:</label>
      <input type='email' id='email' name='email'/>
      <button>Submit</button>
    </form>
  );
}