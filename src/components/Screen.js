const Screen = ({ value }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        textAlign: "right",
        marginBottom: 10,
        padding: "10px 5px",
        fontSize: 20
      }}
    >
      {value}
    </div>
  );
};

export default Screen;
