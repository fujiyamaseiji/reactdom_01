import React from "react";

const App = () => {
  const onClickButton = () => {
    alert("alart");
  };
  const hOneTitle = {
    color: "red",
    fontSize: "24px",
    borderRadius: "20px"
  };

  return (
    <>
      <h1 style={hOneTitle}>React 頑張ってる途中</h1>
      <button style={hOneTitle} onClick={onClickButton}>
        ボタンですよ
      </button>
    </>
  );
};

export default App;
// コンポーネント化しました
