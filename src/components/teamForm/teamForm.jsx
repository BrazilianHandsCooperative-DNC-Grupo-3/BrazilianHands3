import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import * as yup from 'yup';
import './index.scss';

const schema = yup.object().shape({
  Contact: yup.string().nullable(), // Permite espaços vazios
  Email: yup.string().nullable().required('Email is required').matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Email must be a valid format (e.g., name@example.com)'
  ),
  Phone: yup.string().nullable(), // Permite espaços vazios
  Eircode: yup.string().nullable(), // Permite espaços vazios
  Address: yup.string().nullable().required('Address is required'), // Permite espaços vazios
  AddressNumber: yup.string().nullable(), // Permite espaços vazios
  Complement: yup.string().nullable(), // Permite espaços vazios
  Services: yup.string().nullable().required('Services are required'), // Permite espaços vazios
});

const TeamForm = () => {
  const [formData, setFormData] = useState({
    Contact: '',
    Email: '',
    Phone: '',
    Eircode: '',
    Address: '',
    AddressNumber: '',
    Complement: '',
    Services: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Hook de navegação

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value })); // Remove o trim para permitir espaços
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
        const dataToSend = { ...formData, userType: 'Provider' };

        const response = await fetch('https://backendbhcdnc.onrender.com/api/provider-form', {
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
          });
          navigate('/rt'); // Redireciona após a submissão bem-sucedida
        } else {
          alert('Error adding form data to the server');
        }
      } catch (error) {
        alert('Error adding form data to the server');
      }
    }
  };

  return (
    <section className='Team'>
      <form onSubmit={onSubmit}>
        <div className='Team_Group'>
          <div className='Team_Group_Contact'>
            <label htmlFor='Contact'>Contact</label>
            <div>
              <input
                className='_Group_Contact_i'
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
            <div>
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
            <label htmlFor='Services'>Services</label>
            <div>
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
          <button type="submit">Submit my request</button>
        </div>
      </form>
    </section>
  );
};

export default TeamForm;