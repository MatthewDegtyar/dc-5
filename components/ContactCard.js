import { Input, Textarea, Button, SelectItem, Select } from '@nextui-org/react'
import { useState } from 'react';
import React from 'react'

const ContactCard = ({ hideTags }) => {
    const [showThankYou, setShowThankYou] = useState(false);

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      comments: '',
    });
  
    const handleSubmit = async (event) => {

      if (!formData.name || !formData.email || !formData.comments) {
        alert('Please fill in all required fields');
        return;
      }
      
      const data = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.comments,
        recipient_email: "andrewhemelt123456789@gmail.com", // Replace with actual recipient email
      };
  
      try {
        const response = await fetch('https://6a2qprknmi.execute-api.us-east-2.amazonaws.com/default/email_API', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        console.log('Response status:', response.status);
  
        if (response.ok) {
          alert('Email sent successfully!');
          setFormData({
            name: "",
            phone: "",
            email: "",
            comments: "",
          });
        } else {
          // Handle the case when the email is not sent successfully
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
  
      setShowThankYou(true);
  
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    };

    const handleChange = (field, value) => {
      setFormData({
        ...formData,
        [field]: value,
      });
    };
  
  return (
    <div className='flex text-white flex-col relative' alt='contact card'>

        {!hideTags && 
            <div className='text-center flex flex-col items-center'>
                    <p className='text-center mb-2 mt-6 text-title'>Let's Get Started</p>
                    <p className='mb-6 max-w-[800px] text-sub self-center text-center'>Degtyar Consulting: Premier Digital Solutions</p>
            </div>
        }
        {hideTags && 
          <div className='h-8'></div>
        }
        <div className='flex flex-col items-center lg:px-[5vw]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 w-full'>
        <Input
            isRequired
            type='name'
            label='Name'
            placeholder='Ex. John Doe'
            onChange={(e) => handleChange('name', e.target.value)}
          />
          <Input
            isRequired
            type='email'
            label='Email'
            placeholder='Ex. John.Doe@mymail.com'
            onChange={(e) => handleChange('email', e.target.value)}
          />
          <Input
            type='phone'
            label='Phone'
            placeholder='Ex. 000-000-0000'
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
          <Textarea
            isRequired
            label='Comments/Inquiry'
            placeholder='How can we help you?'
            onChange={(e) => handleChange('comments', e.target.value)}
          />
        </div>

        <button onClick={() => handleSubmit()} href=''alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
          <p className='text-white group-hover:text-black underline-animation'>Submit</p>
        </button>

        </div>
        {showThankYou &&
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 backdrop-blur-md' alt='popup'>
            <div className='flex flex-col items-center justify-center p-8 rounded-md' alt='final'>
              <p className='text-title'>Thank you!</p>
              <p className='text-h2 mt-2'>We'll be in touch shortly</p>

              <button onClick={() => setShowThankYou(false)} href=''alt='' className='py-2 px-8 bg-none rounded-[1px] border-2 outline-white group hover:bg-white mt-8'>
                <p className='text-white group-hover:text-black underline-animation'>Close</p>
              </button>
            </div>
          </div>

        }
<div className='h-6' alt='spacer'></div>
    </div>
  )
}

export default ContactCard