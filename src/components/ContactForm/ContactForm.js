import { useState } from 'react';

const ContactForm = ({handleLeadForm}) => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '91',
    mobileNo: '',
    email: '',
    textMessage: ''
  });
  const [popup, setPopup] = useState(false)
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
      if (res.ok) {
        setFormData({
          name: '',
          countryCode: '91',
          mobileNo: '',
          email: '',
          textMessage:''
        });
        handleLeadForm()
        setPopup(true)
      } else {
        setMessage('Failed to send your message.');
      }
    } catch (error) {
      setMessage('An error occurred while sending your message.');
    }
  };

  return (
    <>
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
            required
            placeholder="Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="inputGroupAdd selectBox">
              <select
                className="form-control countryCode"
                name="countryCode"
                required
                id="dev_countrylist"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="91">+91</option><option value="61">+61</option><option value="852">+852</option><option value="968">+968</option><option value="974">+974</option><option value="65">+65</option><option value="971">+971</option><option value="44">+44</option><option value="1">+1</option><option value="27">+27</option><option value="60">+60</option><option value="64">+64</option><option value="66">+66</option><option value="966">+966</option><option value="31">+31</option><option value="973">+973</option><option value="54">+54</option><option value="43">+43</option><option value="880">+880</option><option value="32">+32</option><option value="55">+55</option><option value="86">+86</option><option value="385">+385</option><option value="42">+42</option><option value="45">+45</option><option value="1809">+1809</option><option value="20">+20</option><option value="358">+358</option><option value="679">+679</option><option value="33">+33</option><option value="49">+49</option><option value="30">+30</option><option value="592">+592</option><option value="36">+36</option><option value="62">+62</option><option value="353">+353</option><option value="972">+972</option><option value="39">+39</option><option value="81">+81</option><option value="962">+962</option><option value="82">+82</option><option value="965">+965</option><option value="853">+853</option><option value="52">+52</option><option value="212">+212</option><option value="47">+47</option><option value="48">+48</option><option value="351">+351</option><option value="40">+40</option><option value="7">+7</option><option value="34">+34</option><option value="46">+46</option><option value="41">+41</option><option value="1868">+1868</option><option value="216">+216</option><option value="90">+90</option><option value="84">+84</option>
              </select>
            </div>
            <input
              type="number"
              inputMode="numeric"
              className="form-control allownumeric mobileNo"
              placeholder="Phone Number"
              name="mobileNo"
              required
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
            required
            placeholder="Email*"
            className="form-control verifyEmail"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group textAreaForm">
        <textarea name="textMessage" id="leadtextArea" value={formData.textMessage}
            onChange={handleChange} className="form-control propertyName" rows="2" placeholder="I would like more information regarding..."></textarea>
        </div>
        <button className="btn btn-primary submit" type="submit">
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>

    {popup ? <div className='thankYouPopUp active'>
    <figure className="leadFormCrossBtn">
        <img src="static/assets/images/cross.svg" onClick={()=> setPopup(false)} className="img-responsive" alt="Close" />
      </figure>
      <div className='formSubmissionContent'>
        <figure className='formSubmission'>
          <img src='static/assets/images/thankyou.png'/>
        </figure>
        <p>Thank You For Filling the form. Our Team Will Contact You Soon.</p>
      </div>
    </div> : ''}
    </>
  );
};

export default ContactForm;