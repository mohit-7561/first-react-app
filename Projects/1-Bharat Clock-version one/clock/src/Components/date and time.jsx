let CurrentTime = () => {
  let time = new Date();

  return (
    <p>
      This is the CurrentTime: {time.toLocaleDateString()}-{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
