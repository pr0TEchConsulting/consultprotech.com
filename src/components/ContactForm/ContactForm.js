const ContactForm = () => {
  
    return (
      <div className="leadFormCardBox active">
        <h2>Connect With Our Team</h2>
        <div className="form-group">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            className="form-control" 
            value="" 
          />
        </div>
        <div className="form-group">
          <div className="input-group">
            <input 
              type="hidden" 
              value="homePage" 
              name="pageType" 
            />
            <div className="inputGroupAdd selectBox">
              <select 
                className="form-control countryCode" 
                placeholder="CountryCode" 
                name="countryCode" 
                required 
                id="dev_countrylist"
              >
                <option value="263">ZW (+263)</option>
              </select>
            </div>
            <input 
              type="text" 
              inputMode="numeric" 
              className="form-control allownumeric mobileNo" 
              placeholder="Phone Number" 
              name="mobileNo" 
              autoComplete="off" 
            />
          </div>
        </div>
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            placeholder="Email*" 
            className="form-control verifyEmail" 
            value="" 
          />
        </div>
        <button 
          className="btn btn-primary submit" 
          type="button"
        >
          Submit
        </button>
      </div>
    );
  };
  
  export default ContactForm;
  