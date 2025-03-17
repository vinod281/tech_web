import { useState } from "react";

const AddPTest = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    offer: "",
    stock: true,
    rating: "",
    category: "",
    review: "",
    image:["ds"],
    imageFile: null, // File object
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, imageFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("Title", product.title);
    formData.append("Price", product.price);
    formData.append("Offer", product.offer);
    formData.append("Stock", product.stock);
    formData.append("Rating", product.rating);
    formData.append("Category", product.category);
    formData.append("Review", product.review);
    formData.append("Image", product.image);
    if (product.imageFile) {
      formData.append("image", product.imageFile);
    }

    try {
      const response = await fetch("https://localhost:7173/api/Product/AddProduct", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload Success:", data);
      alert("Product Added Successfully!");
    } catch (error) {
      console.error("Upload Failed:", error);
      alert("Error uploading product!");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={product.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="offer"
          placeholder="Offer (%)"
          value={product.offer}
          onChange={handleChange}
          required
        />
        <label>
          <input
            type="checkbox"
            name="stock"
            checked={product.stock}
            onChange={handleChange}
          />
          In Stock
        </label>
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={product.rating}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
        />
        <textarea
          name="review"
          placeholder="Review"
          value={product.review}
          onChange={handleChange}
          required
        />
        <input type="file" accept="image/*" onChange={handleFileChange} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddPTest;