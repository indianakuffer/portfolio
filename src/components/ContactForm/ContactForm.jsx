import React, { useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  background: #3fe0d0;
  font-family: inherit;
  padding: 20px 30px;
  border-radius: 5px;
  width: 50%;
  max-width: 500px;
  min-width: 250px;
  label {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    input, textarea {
      font-family: inherit;
      width: 100%;
      border: none;
      padding: 0.4em;
    }
  }
  button {
    border: none;
    background: white;
    width: 40%;
    max-width: 100px;
    padding: 0.3em;
    font-size: 16px;
    font-family: 'Playfair Display', times, serif;
    font-weight: bold;
    border-radius: 0.2em;
    margin-top: 1em;
  }
`
const Call = styled.div`
  font-weight: bold;
  font-family: 'Playfair Display', times, serif;
  font-size: 34px;
  margin-bottom: 0.6em;
`

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
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
    <StyledForm onSubmit={handleSubmit} autoComplete='off'>
      <Call>Get in Touch</Call>
      <label name='name'>
        <input type="text" name="name" value={formData.name} placeholder='Name' onChange={handleChange} required />
      </label>
      <label name='email'>
        <input type="email" name="email" value={formData.email} placeholder='Email' onChange={handleChange} required />
      </label>
      <label name='message'>
        <textarea name="message" value={formData.message} placeholder='Message' onChange={handleChange} required />
      </label>
      <button type="submit">Send</button>
    </StyledForm>
  )
}
