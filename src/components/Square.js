const Square = ({ bgColor, id, isDecorate }) => {
  console.log(id);
  return (
    <>
      <div
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: bgColor ?? 'black',
          borderRadius: '6px',
          padding: '5px',
          border: isDecorate ? '5px dotted green' : null,
        }}
      >
        Square
      </div>
    </>
  );
};

export default Square;
