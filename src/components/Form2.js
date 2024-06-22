import React from 'react';

const Form2 = ({ formData, handleChange, errors, prevStep, nextStep }) => {
  return (
    <div>
      <h2>Address Information</h2>
      <div className="form-group">
        <label>Street Address:</label>
        <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
        {errors.streetAddress && <div className="error">{errors.streetAddress}</div>}
      </div>
      <div className="form-group">
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        {errors.city && <div className="error">{errors.city}</div>}
      </div>
      <div className="form-group">
        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        {errors.state && <div className="error">{errors.state}</div>}
      </div>
      <div className="form-group">
        <label>Postal Code:</label>
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        {errors.postalCode && <div className="error">{errors.postalCode}</div>}
      </div>
      <div className="form-group">
        <label>Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        {errors.country && <div className="error">{errors.country}</div>}
      </div>

      {/* Navigation buttons */}
      <div className="button-container">
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="button" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Form2;
