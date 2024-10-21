import React, { useState } from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const schema = yup.object().shape({
  Contact: yup.string().required('Name is required').matches(/^[\s\S]*$/, 'Spaces are allowed'),
  Email: yup.string().required('Email is required').matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Email must be a valid format (e.g., name@example.com)'
  ),
  Phone: yup.string().required('Phone number is required').matches(/^[0-9]*$/, 'Phone number must contain only numbers'), // Apenas números
  Eircode: yup.string().required('Eircode is required'),
  Address: yup.string().required('Address is required').matches(/^[\s\S]*$/, 'Spaces are allowed'),
  AddressNumber: yup.string().required('Number is required'),
  Complement: yup.string().matches(/^[\s\S]*$/, 'Spaces are allowed'),
  Services: yup.string().required('Services are required').matches(/^[\s\S]*$/, 'Spaces are allowed'),
  Material: yup.string().matches(/^[\s\S]*$/, 'Spaces are allowed'),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Contact: '',
    Email: '',
    Phone: '',
    Eircode: '',
    Address: '',
    AddressNumber: '',
    Complement: '',
    Services: '',
    Material: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    
    // Permitir apenas números no campo Phone
    if (name === 'Phone') {
      if (/^[0-9]*$/.test(value) || value === '') { // Permitir apenas números ou vazio
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value.trimStart() })); // Mantém espaços à direita
    }

    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const formattedErrors = validationErrors.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      setErrors(formattedErrors);
      return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validate();
    if (isValid) {
      try {
        const dataToSend = {
          ...formData,
          userType: 'client',
          Material: formData.Material || 'No material provided',
        };

        const response = await fetch('https://backendbhcdnc.onrender.com/api/client-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
          setFormData({
            Contact: '',
            Email: '',
            Phone: '',
            Eircode: '',
            Address: '',
            AddressNumber: '',
            Complement: '',
            Services: '',
            Material: '',
          });
          navigate('/rt');
        } else {
          alert('Error adding form data to database');
        }
      } catch (error) {
        alert('Error adding form data to database');
      }
    }
  };

  return (
    <section className='Team'>
      <form onSubmit={onSubmit}>
        <div className='Team_Group'>
          {/* Campos do formulário */}
          <div className='Team_Group_Contact'>
            <label htmlFor='Contact'>Contact</label>
            <div>
              <input
                type='text'
                id='Contact'
                name='Contact'
                value={formData.Contact}
                onChange={onInputChange}
              />
              {errors.Contact && <p className='error'>{errors.Contact}</p>}
            </div>
          </div>
          <div className='Team_Group_Email'>
            <label htmlFor='Email'>Email</label>
            <div>
              <input
                type='email'
                id='Email'
                name='Email'
                value={formData.Email}
                onChange={onInputChange}
              />
              {errors.Email && <p className='error'>{errors.Email}</p>}
            </div>
          </div>
          <div className='Team_Group_Phone'>
            <label htmlFor='Phone'>Phone</label>
            <div>
              <input
                type='tel'
                id='Phone'
                name='Phone'
                value={formData.Phone}
                onChange={onInputChange}
              />
              {errors.Phone && <p className='error'>{errors.Phone}</p>}
            </div>
          </div>
          <div className='Team_Group_Eircode'>
            <label htmlFor='Eircode'>Eircode</label>
            <div>
              <input
                type='text'
                id='Eircode'
                name='Eircode'
                value={formData.Eircode}
                onChange={onInputChange}
              />
              {errors.Eircode && <p className='error'>{errors.Eircode}</p>}
            </div>
          </div>
          <div className='Team_Group_Address'>
            <label htmlFor='Address'>Address</label>
            <div>
              <input
                type='text'
                id='Address'
                name='Address'
                value={formData.Address}
                onChange={onInputChange}
              />
              {errors.Address && <p className='error'>{errors.Address}</p>}
            </div>
          </div>
          <div className='Team_Group_Number'>
            <label htmlFor='AddressNumber'>Number</label>
            <div>
              <input
                type='text'
                id='AddressNumber'
                name='AddressNumber'
                value={formData.AddressNumber}
                onChange={onInputChange}
              />
              {errors.AddressNumber && <p className='error'>{errors.AddressNumber}</p>}
            </div>
          </div>
          <div className='Team_Group_Complement'>
            <label htmlFor='Complement'>Complement</label>
            <div className='Form_Team_Grop'>
              <input
                type='text'
                id='Complement'
                name='Complement'
                value={formData.Complement}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className='Team_Group_Services'>
            <label htmlFor='Services'>Type of service to be performed:</label>
            <div className='Form_Team_Grop'>
              <input
                type='text'
                id='Services'
                name='Services'
                value={formData.Services}
                onChange={onInputChange}
              />
              {errors.Services && <p className='error'>{errors.Services}</p>}
            </div>
          </div>
          <div className='Team_Group_Services'>
            <label htmlFor='Material'>Do you have the material for the service? Which?</label>
            <div className='Form_Team_Grop'>
              <input
                type='text'
                id='Material'
                name='Material'
                value={formData.Material}
                onChange={onInputChange}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit my request</button>
      </form>
    </section>
  );
};

export default ContactForm;
