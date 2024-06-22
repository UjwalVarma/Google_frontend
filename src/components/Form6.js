import React from 'react';

const Form6 = ({ formData, handleChange, handleSubmit, errors }) => {
  return (
    <div>
      <div className="form-group">
        <label>Consent to conduct background checks:</label>
        <select name="backgroundCheckConsent" value={formData.backgroundCheckConsent} onChange={handleChange} required>
          <option value="">Select Option</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="MAYBE">MAYBE</option>
        </select>
        {errors.backgroundCheckConsent && <div className="error">{errors.backgroundCheckConsent}</div>}
      </div>
      <div className="form-group">
        <label>Consent to Drug/Alcohol Testing:</label>
        <select name="drugAlcoholTestingConsent" value={formData.drugAlcoholTestingConsent} onChange={handleChange} required>
          <option value="">Select Option</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="MAYBE">MAYBE</option>
        </select>
        {errors.drugAlcoholTestingConsent && <div className="error">{errors.drugAlcoholTestingConsent}</div>}
      </div>
      <div className="form-group">
        <label>Disclosure of any Criminal Convictions or Pending Criminal Cases:</label>
        <select name="criminalConvictionsDisclosure" value={formData.criminalConvictionsDisclosure} onChange={handleChange} required>
          <option value="">Select Option</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
        {errors.criminalConvictionsDisclosure && <div className="error">{errors.criminalConvictionsDisclosure}</div>}
      </div>
      {formData.criminalConvictionsDisclosure === 'YES' && (
        <div className="form-group">
          <label>Details of any Criminal Convictions or Pending Criminal Cases:</label>
          <textarea name="criminalConvictionsDetails" value={formData.criminalConvictionsDetails} onChange={handleChange} rows="4" required></textarea>
          {errors.criminalConvictionsDetails && <div className="error">{errors.criminalConvictionsDetails}</div>}
        </div>
      )}
      <div className="form-group">
        <label>By submitting this form, I acknowledge that all the information provided is true and accurate to the best of my knowledge:</label>
        <div>
          <label>
            <input type="radio" name="acknowledgement" value="YES" checked={formData.acknowledgement === 'YES'} onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="acknowledgement" value="NO" checked={formData.acknowledgement === 'NO'} onChange={handleChange} /> No
          </label>
        </div>
        {errors.acknowledgement && <div className="error">{errors.acknowledgement}</div>}
      </div>

      {/* Error handling for Form6 */}
      {Object.keys(errors).length > 0 && (
        <div className="error-summary">
          <p>Please fix the following errors:</p>
          <ul>
            {Object.keys(errors).map((key) => (
              <li key={key}>{errors[key]}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Submit button for the entire application */}
      <button onClick={handleSubmit}>Submit Application</button>
    </div>
  );
};

export default Form6;
