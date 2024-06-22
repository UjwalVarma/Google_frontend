import React from 'react';

const Form5 = ({ formData, handleChange, handleFileChange, errors, prevStep, nextStep, renderProgressBar, clearForm }) => {
  return (
    <div>
      <div className="form-group">
        <label>Education Course:</label>
        <input type="text" name="educationCourse" value={formData.educationCourse} onChange={handleChange} required />
        {errors.educationCourse && <div className="error">{errors.educationCourse}</div>}
      </div>
      <div className="form-group">
        <label>Education Specialization:</label>
        <input type="text" name="educationSpecialization" value={formData.educationSpecialization} onChange={handleChange} required />
        {errors.educationSpecialization && <div className="error">{errors.educationSpecialization}</div>}
      </div>
      <div className="form-group">
        <label>Education Institution:</label>
        <input type="text" name="educationInstitution" value={formData.educationInstitution} onChange={handleChange} required />
        {errors.educationInstitution && <div className="error">{errors.educationInstitution}</div>}
      </div>
      <div className="form-group">
        <label>Year of Completion:</label>
        <input type="text" name="educationYearOfCompletion" value={formData.educationYearOfCompletion} onChange={handleChange} required />
        {errors.educationYearOfCompletion && <div className="error">{errors.educationYearOfCompletion}</div>}
      </div>
      <div className="form-group">
        <label>Pass Percentage:</label>
        <input type="text" name="educationPassPercentage" value={formData.educationPassPercentage} onChange={handleChange} required />
        {errors.educationPassPercentage && <div className="error">{errors.educationPassPercentage}</div>}
      </div>
      <div className="form-group">
        <label>Proof of Education:</label>
        <input type="file" name="educationProof" onChange={handleFileChange} required />
        {errors.educationProof && <div className="error">{errors.educationProof}</div>}
      </div>
      <div className="form-group">
        <label>Do you have any certifications?</label>
        <div>
          <label>
            <input type="radio" name="certifications" value="Yes" checked={formData.certifications === 'Yes'} onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="certifications" value="No" checked={formData.certifications === 'No'} onChange={handleChange} /> No
          </label>
        </div>
      </div>
      {formData.certifications === 'Yes' && (
        <div>
          <div className="form-group">
            <label>Certifications List:</label>
            <input type="text" name="certificationsList" value={formData.certificationsList} onChange={handleChange} required />
            {errors.certificationsList && <div className="error">{errors.certificationsList}</div>}
          </div>
          <div className="form-group">
            <label>Issuing Authority:</label>
            <input type="text" name="certificationIssuingAuthority" value={formData.certificationIssuingAuthority} onChange={handleChange} required />
            {errors.certificationIssuingAuthority && <div className="error">{errors.certificationIssuingAuthority}</div>}
          </div>
          <div className="form-group">
            <label>Certification Completion Date:</label>
            <input type="date" name="certificationCompletionDate" value={formData.certificationCompletionDate} onChange={handleChange} required />
            {errors.certificationCompletionDate && <div className="error">{errors.certificationCompletionDate}</div>}
          </div>
          <div className="form-group">
            <label>Proof of Certification:</label>
            <input type="file" name="certificationProof" onChange={handleFileChange} required />
            {errors.certificationProof && <div className="error">{errors.certificationProof}</div>}
          </div>
        </div>
      )}
      <div className="form-group">
        <label>Expected Joining Date:</label>
        <input type="date" name="expectedJoiningDate" value={formData.expectedJoiningDate} onChange={handleChange} required />
        {errors.expectedJoiningDate && <div className="error">{errors.expectedJoiningDate}</div>}
      </div>
      <div className="form-group">
        <label>Are you a fresher?</label>
        <div>
          <label>
            <input type="radio" name="fresher" value="YES" checked={formData.fresher === 'YES'} onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="fresher" value="NO" checked={formData.fresher === 'NO'} onChange={handleChange} /> No
          </label>
        </div>
        {errors.fresher && <div className="error">{errors.fresher}</div>}
      </div>

      {/* Navigation Buttons */}
      <div className="form-navigation">
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="button" onClick={nextStep}>Next</button>
      </div>

      {/* Progress Bar */}
      {renderProgressBar && (
        <div className="progress-bar">
          Progress: 100% {/* Adjust this value based on your actual progress */}
        </div>
      )}

      {/* Clear Form Button (Optional) */}
      <div className="form-group">
        <button type="button" onClick={clearForm}>Clear Form</button>
      </div>
    </div>
  );
};

export default Form5;
