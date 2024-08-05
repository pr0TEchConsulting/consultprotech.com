import { useState } from 'react';

const ContactForm = ({handleLeadForm}) => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '91',
    mobileNo: '',
    email: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setMessage('Your message has been sent successfully.');
        setFormData({
          name: '',
          countryCode: '91', // Changed to default code or desired code
          mobileNo: '',
          email: '',
        });
      } else {
        setMessage('Failed to send your message.');
      }
    } catch (error) {
      setMessage('An error occurred while sending your message.');
    }
  };

  return (
    <div className="leadFormCardBox active">
      <h2>Connect With Our Team</h2>
      <figure className="leadFormCrossBtn">
        <img src="static/assets/images/cross.svg" onClick={handleLeadForm} className="img-responsive" alt="Close" />
      </figure>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="input-group">
            <input type="hidden" value="homePage" name="pageType" />
            <div className="inputGroupAdd selectBox">
              <select
                className="form-control countryCode"
                name="countryCode"
                required
                id="dev_countrylist"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="91">IN (+91)</option>
                <option value="263">ZW (+263)</option>
                {/* Add more country codes as needed */}
              </select>
            </div>
            <input
              type="text"
              inputMode="numeric"
              className="form-control allownumeric mobileNo"
              placeholder="Phone Number"
              name="mobileNo"
              autoComplete="off"
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="form-control verifyEmail"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary submit" type="submit">
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ContactForm;