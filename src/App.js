import { useState } from 'react';

import Select from './components/Select';
import Square from './components/Square';

const App = () => {
  const [decorateSquare, setDecorateSquare] = useState(null);

  const onSelectSquare = choosenSquare => {
    setDecorateSquare(choosenSquare);
  };

  const detailsSquare = [
    {
      id: '1',
      bgColor: 'gold',
    },
    {
      id: '2',
      bgColor: 'red',
    },
    {
      id: '3',
      bgColor: 'pink',
    },
    {
      id: '4',
      bgColor: 'yellow',
    },
  ];

  return (
    <>
      <h1>hi from App</h1>
      <Select onSelectSquare={onSelectSquare} />
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {/* <Square bgColor='gold' />
        <Square bgColor='red' />
        <Square bgColor='purple' />
        <Square /> */}

        {/* {detailsSquare.map(detailSquare => (
            <Square
                key={detailSquare.id}
                id={detailSquare.id}
                bgColor={detailSquare.bgColor}
            />
            ))} */}
        {detailsSquare.map(({ id, bgColor }) => {
          return (
            <Square
              key={id}
              id={id}
              bgColor={bgColor}
              isDecorate={id === decorateSquare}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;

{
  /* <Square
          name='uncarre'
          age={10}
          obj={{ uneprop: 'une value' }}
          iamaboolean={true}
          iamabooleannewversion
          sendinganarray={['el1', 'el2']}
          test={null}
        /> */
}
