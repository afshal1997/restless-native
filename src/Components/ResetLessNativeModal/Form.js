import { useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
    setPhone("");
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      phone &&
      email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: email,
        MERGE3: phone,
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {status === "sending" && (
        <div className="alert alert-warning" role="alert">
          <b>sending...</b>
        </div>
      )}
      {status === "error" && (
        <div
          class="alert alert-danger" role="alert"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="alert alert-info" role="alert"
        >
          <b>Thanks for getting in touch!</b>
        </div>
      )}
      <InputGroup className="mb-3">
        <FormControl
          onChange={(e) => handleEmail(e)}
          id="email"
          value={email}
          placeholder="Email Address"
          name="email"
          aria-label="Email Address"
          aria-describedby="Email"
          type="email"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          onChange={(e) => handlePhone(e)}
          id="phoneNumber"
          value={phone}
          placeholder="Phone Number"
          name="phoneNumber"
          aria-label="Number"
          aria-describedby="Number"
          type="number"
          required
        />
      </InputGroup>
      <Button className="mb-4" type="submit" variant="primary">
        Subscribe
      </Button>
    </form>
  );
};
export default CustomForm;
