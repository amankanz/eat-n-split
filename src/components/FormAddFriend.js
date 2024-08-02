import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImageLink] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const new_friend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    onAddFriend(new_friend);

    setName("");
    setImageLink("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨🏽‍🤝‍👨🏽Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImageLink(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
