import React, { useState } from "react";
import AdopterData from "./AdopterData";

const PetAdoptionForm = () => {
  const [formData, setFormData] = useState([]);
  const [petName, setpetName] = useState("");
  const [petType, setpetType] = useState("");
  const [yourName, setyourName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [showForm, setShowFrom] = useState(false);
  const handleGoBack = () => {
    setShowFrom(!true);
  };
  const handelForm = (e) => {
    e.preventDefault();

    if (!petName || !yourName || !email || !phone) {
      alert("Please fill out all fields");
      return;
    }

    setFormData((prev) => {
      return [
        ...prev,
        {
          petName,
          petType,
          yourName,
          email,
          phone,
        },
      ];
    });

    setShowFrom(true);
  };

  console.log(formData);

  if (!showForm) {
    return (
      <form onSubmit={handelForm} className="form">
        <label htmlFor="">Pet Name</label>
        <input
          type="text"
          placeholder="Pet Name"
          value={petName}
          onChange={(e) => setpetName(e.target.value)}
        />

        <label htmlFor="">Pet Type</label>
        <select
          id="petType"
          value={petType}
          onChange={(e) => setpetType(e.target.value)}
        >
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Bird">Bird</option>
          <option value="Rabbit">Rabbit</option>
        </select>

        <label htmlFor="">Your Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={yourName}
          onChange={(e) => setyourName(e.target.value)}
          name="PetName"
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Phone</label>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button>Submit</button>
      </form>
    );
  }

  return (
    <div>
      <AdopterData formData={formData} handleGoBack={handleGoBack} />
    </div>
  );
};

export default PetAdoptionForm;
