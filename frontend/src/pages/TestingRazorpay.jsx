import { useState } from "react";

function TestingRazorpay() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    amount: 0,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    // Contact validation
    if (!formData.contact.trim()) {
      errors.contact = "Contact number is required";
      isValid = false;
    } else {
      const phoneRegex = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;
      if (!phoneRegex.test(formData.contact)) {
        errors.contact = "Invalid Indian phone number";
        isValid = false;
      }
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.amount < 0) {
      errors.amount = "Amount must be atleast 1 rupees";
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:4000/createOrder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: formData.amount, email: formData.email }),
        });

        const data = await response.json();
        console.log(data);

        const options = {
          key: "rzp_test_ApfDwyyDcj8yjg",
          amount: data.amount,
          currency: data.currency,
          order_id: data.id,
          name: formData.name,
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.contact,
          },

          notes: {
            address: "Razorpay Corporate Office",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 className="text-black">Details of person to send money</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="m-1 border-2 border-solid border-black"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="contact">Contact</label>
          <input
            className="m-1 border-2 border-solid border-black"
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <span>{errors.contact}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            className="m-1 border-2 border-solid border-black"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            className="m-1 border-2 border-solid border-black"
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
          {errors.amount && <span>{errors.amount}</span>}
        </div>

        <button className="bg-slate-200 p-2 rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TestingRazorpay;
