import React from "react";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [error, setError] = React.useState(false);
  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;

    let result;
    await axios
      .post("http://localhost:5000/add-product", {
        name,
        price,
        category,
        company,
        userId,
      })
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    // let result = await fetch("http://localhost:5000/add-product", {
    //   method: "post",
    //   body: JSON.stringify({ name, price, category, company, userId }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // result = await result.json();
    console.warn(result);
  };
  return (
    <div className="product">
      <h1>Add product</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && (
        <span className="invalid_input">Enter valid name</span>
      )}
      <input
        type="text"
        placeholder="Enter product price"
        className="inputbox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      {error && !price && (
        <span className="invalid_input">Enter valid price</span>
      )}
      <input
        type="text"
        placeholder="Enter product category"
        className="inputbox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      {error && !category && (
        <span className="invalid_input">Enter valid category</span>
      )}
      <input
        type="text"
        placeholder="Enter product company"
        className="inputbox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      {error && !company && (
        <span className="invalid_input">Enter valid company</span>
      )}
      <button onClick={addProduct} className="appbutton">
        Add Product
      </button>
    </div>
  );
};
export default AddProduct;