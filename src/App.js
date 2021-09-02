import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([
    'ReactJS',
    'React Native',
    'NodeJS'
  ]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [tech, newTech]);

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');
    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techLength = useMemo(() => tech.length, [tech]);

  return (
    <>
    <ul>
      { tech.map(t => (
        <li key={t}>{ t }</li>
      )) }
    </ul>
    <strong>Você tem {techLength} tecnologias.</strong>
    <br/><br/>
    <input value={newTech} onChange={e => setNewTech(e.target.value)} />
    <button type='button' onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
