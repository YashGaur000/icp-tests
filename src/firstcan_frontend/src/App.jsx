import { useState } from 'react';
import { firstcan_backend } from 'declarations/firstcan_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    firstcan_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Jaldi Jaldi naam likho: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">dabana mat</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
