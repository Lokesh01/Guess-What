import React from "react";

const Head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      position: "absolute",
      border: "10px solid black",
      borderRadius: "100%",
      right: "-30px",
      top: "50px",
    }}
  />
);

const Body = (
  <div
    style={{
      position: "absolute",
      width: "10px",
      height: "100px",
      backgroundColor: "black",
      right: 0,
      top: "120px",
    }}
  />
);

const Right_Arm = (
  <div
    style={{
      position: "absolute",
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      right: "-100px",
      top: "150px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const Left_Arm = (
  <div
    style={{
      position: "absolute",
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      right: "10px",
      top: "150px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const Left_leg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const Right_leg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const bodyParts = [Head, Body, Right_Arm, Left_Arm, Right_leg, Left_leg];

type hangmanDrawingProps = {
  noOfLives: number;
};

const HangmanImage = ({ noOfLives }: hangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {bodyParts.slice(0, noOfLives)}
      <div
        style={{
          backgroundColor: "black",
          height: "50px",
          width: "10px",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      <div
        style={{
          backgroundColor: "black",
          height: "10px",
          width: "200px",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          backgroundColor: "black",
          height: "400px",
          width: "10px",
          marginLeft: "120px",
        }}
      />
      <div
        style={{ backgroundColor: "black", height: "10px", width: "250px" }}
      />
    </div>
  );
};

export default HangmanImage;
