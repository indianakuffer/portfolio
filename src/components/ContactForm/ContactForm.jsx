import React, { useState, useEffect } from 'react'


export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Your Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}
