import React from "react";
const text = "Vamos Conversar";
const result = text.split("").map(
  (char, i) =>
    `<span key=${i} style="transform:rotate(${i * 5}deg">${char}</span>`).join("")

export default result;