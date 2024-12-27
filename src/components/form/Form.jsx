// React
import { useState, useRef } from "react";
// Styles
import styles from "./Form.module.css";

// Email regex
const emailRegex = new RegExp(`^[^\\s@]+@[^\\s@]+(\\.[^\\s@]+)+$`)
// Error texts
const emailErrorText = "Please provide a valid email";
const provideBothPasswords = "Both password fields are required";
const nameErrorText = "Please provide a name";
// Max length for inputs
const MAXLENGTH = 50;

export default function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  const [formHasBeenSubmitted, setFormHasBeenSubmitted] = useState(false)
  const [passwordError, setPasswordError] = useState("")
  const [emailError, setEmailError] = useState("")

  const formRef = useRef()
  const nameRef = useRef()

  const handleSubmit = e => {
    e.preventDefault();
    // If all input fields are empty
    if (!name.trim(" ") && !email && !password && !confirmPassword) {
      setPasswordError(provideBothPasswords);
      setEmailError(emailErrorText);
    }
    if (!email || !emailRegex.test(email)) {
      setEmailError(emailErrorText)
    }
    if (password !== confirmPassword && !password || !confirmPassword) {
      setPasswordError(provideBothPasswords)
    } else if (password !== confirmPassword) {
      setPasswordError("Passwords do not match")
    } else {
      setPasswordError("")
    }
    if (name.trim(" ")
      && email
      && password
      && confirmPassword
      && password === confirmPassword
      && emailRegex.test(email)) {
      // Get data if there are no errors
      let formData = new FormData(formRef.current)
      let name = formData.get("user_name").trim(" ")
      let email = formData.get("user_email")
      let password = formData.get("user_password")

      console.log(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`)

      setFormHasBeenSubmitted(false) // Reset state
      setPasswordError("")
      setEmailError("")
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      nameRef.current.focus() // Focus on first input field
      return;
    }
    setFormHasBeenSubmitted(true)
  };

  const handleEmailChange = e => {
    const emailInput = e.target.value;
    setEmail(emailInput);

    if (formHasBeenSubmitted) {
      if (emailRegex.test(emailInput)) {
        setEmailError(""); // Clear error if the input is valid
      } else {
        setEmailError(emailErrorText); // Display error message if invalid
      }
    }
  };

  return (
    <main className={styles.main}>
      <form
        className={styles.dynamicForm}
        onSubmit={handleSubmit}
        ref={formRef}
        aria-labelledby="create-account-heading"
        noValidate // Validate form myself
      >
        <h1 id="create-account-heading" className={styles.heading}>
          Create an account
        </h1>
        <p className={styles.requiredText}>
          Required fields are followed by <span aria-label="required">*</span>.
        </p>
        <div>
          <label htmlFor="name">
            Name: <span aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={name}
            onChange={e => setName(e.target.value)}
            ref={nameRef}
            maxLength={MAXLENGTH}
            required
          />
          {/* Show error if there are a bunch of white spaces */}
          {formHasBeenSubmitted && !name.trim(" ") && (
            <p className={styles.showInvalidPara}>{nameErrorText}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">
            Email: <span aria-label="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={email}
            onChange={handleEmailChange}
            maxLength={MAXLENGTH}
            required
          />
          {formHasBeenSubmitted && emailError && (
            <p className={styles.showInvalidPara}>{emailError}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">
            Password: <span aria-label="required">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="user_password"
            value={password}
            maxLength={MAXLENGTH}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirm-password">
            Confirm Password: <span aria-label="required">*</span>
          </label>
          <input
            type="password"
            id="confirm-password"
            name="user_confirm_password"
            value={confirmPassword}
            maxLength={MAXLENGTH}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          {formHasBeenSubmitted && passwordError && (
            <p className={styles.showInvalidPara}>{passwordError}</p>
          )}
        </div>
        <div>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
