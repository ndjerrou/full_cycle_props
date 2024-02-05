import Square from './components/Square';

const App = () => {
  return (
    <>
      <h1>hi from App</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <Square
          name='uncarre'
          age={10}
          obj={{ uneprop: 'une value' }}
          iamaboolean={true}
          iamabooleannewversion
          sendinganarray={['el1', 'el2']}
          test={null}
        />
        {/* <Square /> */}
      </div>
    </>
  );
};

export default App;
