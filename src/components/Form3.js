import React from 'react';

const Form3 = ({ formData, handleChange, handleFileChange, errors, prevStep, nextStep }) => {
  return (
    <div>
      <h2>Identification Documents</h2>
      <div className="form-group">
        <label>Do you have a passport?</label>
        <select name="hasPassport" value={formData.hasPassport} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.hasPassport && <div className="error">{errors.hasPassport}</div>}
      </div>
      {formData.hasPassport === 'Yes' && (
        <>
          <div className="form-group">
            <label>Passport Number:</label>
            <input type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} />
            {errors.passportNumber && <div className="error">{errors.passportNumber}</div>}
          </div>
          <div className="form-group">
            <label>Upload your Passport Copy:</label>
            <input type="file" name="passportCopy" onChange={handleFileChange} />
            {errors.passportCopy && <div className="error">{errors.passportCopy}</div>}
          </div>
        </>
      )}
      <div className="form-group">
        <label>Aadhaar Card Number:</label>
        <input type="text" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleChange} required />
        {errors.aadhaarNumber && <div className="error">{errors.aadhaarNumber}</div>}
      </div>
      <div className="form-group">
        <label>Upload your Aadhaar Card Copy:</label>
        <input type="file" name="aadhaarCopy" onChange={handleFileChange} />
        {errors.aadhaarCopy && <div className="error">{errors.aadhaarCopy}</div>}
      </div>
      <div className="form-group">
        <label>PAN Card Number:</label>
        <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} required />
        {errors.panNumber && <div className="error">{errors.panNumber}</div>}
      </div>
      <div className="form-group">
        <label>Upload your PAN Card Copy:</label>
        <input type="file" name="panCopy" onChange={handleFileChange} />
        {errors.panCopy && <div className="error">{errors.panCopy}</div>}
      </div>
      <div className="form-group">
        <label>Driving License Details (if applicable):</label>
        <input type="text" name="drivingLicenseNumber" value={formData.drivingLicenseNumber} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Upload your Driving License Copy:</label>
        <input type="file" name="drivingLicenseCopy" onChange={handleFileChange} />
      </div>
      <div className="form-group">
        <label>Voter ID Card Details (if applicable):</label>
        <input type="text" name="voterIdNumber" value={formData.voterIdNumber} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Upload your Voter ID Copy:</label>
        <input type="file" name="voterIdCopy" onChange={handleFileChange} />
      </div>

      {/* Navigation buttons */}
      <div className="button-container">
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="button" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Form3;
