/*
export default function Fruit({ fruitInfo, onClick }) {
  // state
  // const fruitInfo = props.fruitInfo;
  // const onFruitDelete = props.onFruitDelete;

  // comportements

  // affichage (render)
  return (
    <li>
      {fruitInfo.nom} <button onClick={onClick}>X</button>
    </li>
  );
}
*/

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Fruit = ({ fruitInfo, onDelete }) => {
  return (
    <View>
      <Text>
        {fruitInfo.nom}{" "}
        <TouchableOpacity onPress={onDelete}>
          <Text>X</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Fruit;