export const validateForm = (formData, currentStep) => {
  const {
    email, firstName, lastName, contactNumber, alternateContactNumber,
    dateOfBirth, age, gender, maritalStatus, nationality,
    streetAddress, city, state, postalCode, country,
    hasPassport, passportNumber, aadhaarNumber, panNumber,
    linkedInProfile, resumeCV, socialMediaProfiles, onlinePortfolio, skills, languages,
    educationCourse, educationSpecialization, educationInstitution, educationYearOfCompletion, educationPassPercentage,
    certifications, certificationsList, certificationIssuingAuthority, certificationCompletionDate,
    expectedJoiningDate, fresher,
    backgroundCheckConsent, drugAlcoholTestingConsent, criminalConvictionsDisclosure, criminalConvictionsDetails, acknowledgement,
  } = formData;

  const errors = {};

  if (!email) errors.email = 'Email is required';
  if (!firstName) errors.firstName = 'First Name is required';
  if (!lastName) errors.lastName = 'Last Name is required';
  if (!contactNumber) errors.contactNumber = 'Contact Number is required';
  if (!alternateContactNumber) errors.alternateContactNumber = 'Alternate Contact Number is required';
  if (!dateOfBirth) errors.dateOfBirth = 'Date of Birth is required';
  if (!age) errors.age = 'Age is required';
  if (!gender) errors.gender = 'Gender is required';
  if (!maritalStatus) errors.maritalStatus = 'Marital Status is required';
  if (!nationality) errors.nationality = 'Nationality is required';

  if (currentStep === 2) {
    if (!streetAddress) errors.streetAddress = 'Street Address is required';
    if (!city) errors.city = 'City is required';
    if (!state) errors.state = 'State is required';
    if (!postalCode) errors.postalCode = 'Postal Code is required';
    if (!country) errors.country = 'Country is required';
  }

  if (currentStep === 3) {
    if (!hasPassport) errors.hasPassport = 'Passport status is required';
    if (hasPassport === 'Yes' && !passportNumber) errors.passportNumber = 'Passport Number is required';
    if (!aadhaarNumber) errors.aadhaarNumber = 'Aadhaar Card Number is required';
    if (!panNumber) errors.panNumber = 'PAN Card Number is required';
  }

  if (currentStep === 4) {
    if (!linkedInProfile) errors.linkedInProfile = 'LinkedIn Profile is required';
    if (!resumeCV) errors.resumeCV = 'Resume/CV is required';
    if (!socialMediaProfiles) errors.socialMediaProfiles = 'Social Media Profiles are required';
    if (!onlinePortfolio) errors.onlinePortfolio = 'Online Portfolio is required';
    if (!skills) errors.skills = 'Skills are required';
    if (!languages) errors.languages = 'Languages are required';
  }

  if (currentStep === 5) {
    if (!educationCourse) errors.educationCourse = 'Education Course is required';
    if (!educationSpecialization) errors.educationSpecialization = 'Education Specialization is required';
    if (!educationInstitution) errors.educationInstitution = 'Education Institution is required';
    if (!educationYearOfCompletion) errors.educationYearOfCompletion = 'Year of Completion is required';
    if (!educationPassPercentage) errors.educationPassPercentage = 'Pass Percentage is required';
    if (certifications === 'Yes') {
      if (!certificationsList) errors.certificationsList = 'Certifications List is required';
      if (!certificationIssuingAuthority) errors.certificationIssuingAuthority = 'Issuing Authority is required';
      if (!certificationCompletionDate) errors.certificationCompletionDate = 'Certification Completion Date is required';
    }
    if (!expectedJoiningDate) errors.expectedJoiningDate = 'Expected Joining Date is required';
    if (!fresher) errors.fresher = 'Fresher status is required';
  }

  if (currentStep === 6) {
    if (!backgroundCheckConsent) errors.backgroundCheckConsent = 'Background Check Consent is required';
    if (!drugAlcoholTestingConsent) errors.drugAlcoholTestingConsent = 'Drug/Alcohol Testing Consent is required';
    if (!criminalConvictionsDisclosure) errors.criminalConvictionsDisclosure = 'Criminal Convictions Disclosure is required';
    if (criminalConvictionsDisclosure === 'YES' && !criminalConvictionsDetails) {
      errors.criminalConvictionsDetails = 'Details of Criminal Convictions are required';
    }
    if (!acknowledgement) errors.acknowledgement = 'Acknowledgement is required';
  }

  return errors;
};
