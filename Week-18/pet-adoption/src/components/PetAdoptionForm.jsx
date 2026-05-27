import React, { useState } from "react";
import AdopterData from "./AdopterData";

const PetAdoptionForm = () => {
  const [allFormData, setAllFormData] = useState([]);

  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    yourName: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [showForm, setShowFrom] = useState(false);
  const handleGoBack = () => {
    setShowFrom(!true);
  };

  const handleForm = (e) => {
    e.preventDefault();

    const { petName, petType, yourName, email, phone } = formData;

    if (!petName || !yourName || !email || !phone) {
      alert("Please fill out all fields");
      return;
    }

    setAllFormData((prev) => [...prev, formData]);

    setShowFrom(true);

    setFormData({
      petName: "",
      petType: "",
      yourName: "",
      email: "",
      phone: "",
    });
  };

  console.log(formData);

  if (!showForm) {
    return (
      <form onSubmit={handleForm} className="form">
        <label htmlFor="">Pet Name</label>
        <input
          type="text"
          placeholder="Pet Name"
          value={formData.petName}
          onChange={handleChange}
          name="petName"
        />

        <label htmlFor="">Pet Type</label>
        <select
          id="petType"
          value={formData.petType}
          name="petType"
          onChange={handleChange}
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
          value={formData.yourName}
          onChange={handleChange}
          name="yourName"
        />

        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="">Phone</label>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    );
  }

  return (
    <div>
      <AdopterData formData={allFormData} handleGoBack={handleGoBack} />
    </div>
  );
};

export default PetAdoptionForm;
