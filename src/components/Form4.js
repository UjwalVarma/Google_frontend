import React from 'react';

const Form4 = ({ formData, handleChange, handleFileChange, errors, prevStep, nextStep, renderProgressBar, clearForm }) => {
  return (
    <div>
      <h2>Professional Links and Documents</h2>
      <div className="form-group">
        <label>Photograph:</label>
        <input
          type="file"
          name="photograph"
          onChange={handleFileChange}
          required
        />
        {errors.photograph && <div className="error">{errors.photograph}</div>}
      </div>
      <div className="form-group">
        <label>LinkedIn Profile:</label>
        <input
          type="url"
          name="linkedInProfile"
          value={formData.linkedInProfile || ''}
          onChange={handleChange}
          required
        />
        {errors.linkedInProfile && <div className="error">{errors.linkedInProfile}</div>}
      </div>
      <div className="form-group">
        <label>Resume/CV:</label>
        <input
          type="file"
          name="resumeCV"
          onChange={handleFileChange}
          required
        />
        {errors.resumeCV && <div className="error">{errors.resumeCV}</div>}
      </div>
      <div className="form-group">
        <label>Social Media Profiles:</label>
        <input
          type="text"
          name="socialMediaProfiles"
          value={formData.socialMediaProfiles || ''}
          onChange={handleChange}
          required
        />
        {errors.socialMediaProfiles && <div className="error">{errors.socialMediaProfiles}</div>}
      </div>
      <div className="form-group">
        <label>Online Portfolio:</label>
        <input
          type="url"
          name="onlinePortfolio"
          value={formData.onlinePortfolio || ''}
          onChange={handleChange}
          required
        />
        {errors.onlinePortfolio && <div className="error">{errors.onlinePortfolio}</div>}
      </div>
      <div className="form-group">
        <label>Skills:</label>
        <input
          type="text"
          name="skills"
          value={formData.skills || ''}
          onChange={handleChange}
          required
        />
        {errors.skills && <div className="error">{errors.skills}</div>}
      </div>
      <div className="form-group">
        <label>Languages:</label>
        <input
          type="text"
          name="languages"
          value={formData.languages || ''}
          onChange={handleChange}
          required
        />
        {errors.languages && <div className="error">{errors.languages}</div>}
      </div>

      {/* Navigation Buttons */}
      <div className="form-navigation">
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="button" onClick={nextStep}>Next</button>
      </div>

      {/* Progress Bar */}
      {renderProgressBar && (
        <div className="progress-bar">
          Progress: 80% {/* Adjust this value based on your actual progress */}
        </div>
      )}

      {/* Clear Form Button (Optional) */}
      <div className="form-group">
        <button type="button" onClick={clearForm}>Clear Form</button>
      </div>
    </div>
  );
};

export default Form4;
