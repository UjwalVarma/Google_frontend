import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Import CSS file for styling
import Form2 from './Form2'; // Import Form2 component
import Form3 from './Form3'; // Import Form3 component
import Form4 from './Form4'; // Import Form4 component
import Form5 from './Form5'; // Import Form5 component
import Form6 from './Form6'; // Import Form6 component
import { validateForm } from '../pages/errorHandling'; // Import error handler function

const initialFormData = {
  email: '',
  firstName: '',
  middleName: '',
  lastName: '',
  contactNumber: '',
  alternateContactNumber: '',
  dateOfBirth: '',
  age: '',
  gender: '',
  maritalStatus: '',
  nationality: '',
  streetAddress: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  hasPassport: '',
  passportNumber: '',
  passportCopy: '',
  aadhaarNumber: '',
  aadhaarCopy: '',
  panNumber: '',
  panCopy: '',
  drivingLicenseNumber: '',
  drivingLicenseCopy: '',
  voterIdNumber: '',
  voterIdCopy: '',
  photograph: '',
  linkedInProfile: '',
  resumeCV: '',
  socialMediaProfiles: '',
  onlinePortfolio: '',
  skills: '',
  languages: '',
  educationCourse: '',
  educationSpecialization: '',
  educationInstitution: '',
  educationYearOfCompletion: '',
  educationPassPercentage: '',
  educationProof: '',
  certifications: '',
  certificationsList: '',
  certificationIssuingAuthority: '',
  certificationCompletionDate: '',
  certificationProof: '',
  expectedJoiningDate: '',
  fresher: '',
  // Form6 fields
  backgroundCheckConsent: '',
  drugAlcoholTestingConsent: '',
  criminalConvictionsDisclosure: '',
  criminalConvictionsDetails: '',
  acknowledgement: '',
};

const Form1 = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData, currentStep);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
          if (formData[key] !== null && formData[key] !== undefined) {
            formDataToSend.append(key, formData[key]);
          }
        });

        const response = await axios.post('http://localhost:5000/api/candidates', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.status === 200) {
          console.log('Response from server:', response.data); // Log response for debugging
          alert('Form submitted successfully!');
          clearForm(); // Reset form after successful submission
        } else {
          throw new Error('Failed to submit form'); // Handle unexpected response status
        }
      } catch (error) {
        console.error('Failed to create candidate', error);
        alert('Failed to submit the form. Please try again.');
      }
    } else {
      alert('Please fix the errors in the form before submitting.');
    }
  };

  const clearForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setErrors({});
  };

  const nextStep = () => {
    const validationErrors = validateForm(formData, currentStep);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderProgressBar = () => {
    const totalSteps = 6;
    return (
      <div className="progress-bar">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div key={index} className={currentStep > index ? 'active' : ''}></div>
        ))}
        <span>Step {currentStep} of {totalSteps}</span>
      </div>
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="multi-step-form">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div>
            <h2>Personal Information</h2>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>First Name:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label>Middle Name:</label>
              <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
              {errors.middleName && <span className="error">{errors.middleName}</span>}
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
            <div className="form-group">
              <label>Contact Number:</label>
              <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
              {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
            </div>
            <div className="form-group">
              <label>Alternate Contact Number:</label>
              <input type="tel" name="alternateContactNumber" value={formData.alternateContactNumber} onChange={handleChange} />
              {errors.alternateContactNumber && <span className="error">{errors.alternateContactNumber}</span>}
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
              {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} />
              {errors.age && <span className="error">{errors.age}</span>}
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <span className="error">{errors.gender}</span>}
            </div>
            <div className="form-group">
              <label>Marital Status:</label>
              <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
              {errors.maritalStatus && <span className="error">{errors.maritalStatus}</span>}
            </div>
            <div className="form-group">
              <label>Nationality:</label>
              <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
              {errors.nationality && <span className="error">{errors.nationality}</span>}
            </div>
            <div className="button-container">
              <button type="button" onClick={nextStep}>Next</button>
              {renderProgressBar()}
              <button type="button" className="clear-button" onClick={clearForm}>Clear Form</button>
            </div>
          </div>
        )}

        {/* Render forms based on currentStep */}
        {currentStep === 2 && (
          <Form2 formData={formData} handleChange={handleChange} errors={errors} prevStep={prevStep} nextStep={nextStep} renderProgressBar={renderProgressBar} clearForm={clearForm} />
        )}
        {currentStep === 3 && (
          <Form3 formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} errors={errors} prevStep={prevStep} nextStep={nextStep} renderProgressBar={renderProgressBar} clearForm={clearForm} />
        )}
        {currentStep === 4 && (
          <Form4 formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} errors={errors} prevStep={prevStep} nextStep={nextStep} renderProgressBar={renderProgressBar} clearForm={clearForm} />
        )}
        {currentStep === 5 && (
          <Form5 formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} errors={errors} prevStep={prevStep} nextStep={nextStep} renderProgressBar={renderProgressBar} clearForm={clearForm} />
        )}
        {currentStep === 6 && (
          <Form6 formData={formData} handleChange={handleChange} errors={errors} prevStep={prevStep} handleSubmit={handleSubmit} renderProgressBar={renderProgressBar} clearForm={clearForm} />
        )}
      </form>
    </div>
  );
};

export default Form1;
