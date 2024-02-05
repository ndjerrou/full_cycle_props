const Square = ({ bgColor }) => {
  return (
    <>
      <div
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: bgColor ?? 'black',
          borderRadius: '6px',
          padding: '5px',
        }}
      >
        Square
      </div>
    </>
  );
};

export default Square;
