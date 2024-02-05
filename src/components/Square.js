const Square = props => {
  console.log(props);
  return (
    <div
      style={{
        width: '60px',
        height: '60px',
        // the value of bgColor
        // should be coming from the parent
        backgroundColor: 'black',
      }}
    >
      hi from Square App
    </div>
  );
};

export default Square;
