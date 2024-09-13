/*
import { useState } from "react";

export default function FruitForm({ handleAdd }) {
  // state
  const [nouveauFruit, setNouveauFruit] = useState("");

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    //fruitsCopy.push(fruitAAjouter);
    handleAdd(fruitAAjouter);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  // affichage (render)
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={nouveauFruit}
        type="text"
        placeholder="Ajouter un fruit..."
        onChange={handleChange}
      />
      <button>Ajouter +</button>
    </form>
  );
}
*/

import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const FruitForm = ({ handleAdd }) => {
  // state
  const [nouveauFruit, setNouveauFruit] = useState("");

  // comportements
  const handleSubmit = () => {
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    handleAdd(fruitAAjouter);
    setNouveauFruit("");
  };

  const handleChange = (text) => {
    setNouveauFruit(text);
  };

  // affichage (render)
  return (
    <View>
      <TextInput
        value={nouveauFruit}
        placeholder="Ajouter un fruit..."
        onChangeText={handleChange}
      />
      <Button title="Ajouter +" onPress={handleSubmit} />
    </View>
  );
};

export default FruitForm;