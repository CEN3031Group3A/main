import React from 'react';
import { useForm } from 'react-hook-form';
import NavBar from '../../components/NavBar/NavBar';
import randomPost from '../Gallery/Post'; // Assuming Post.js is in the same directory
import './GalleryForm.css';

const GalleryForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission, you can log data or perform other actions here
    console.log(data);
  };

  // Simulate random post data
  const simulatedPostData = randomPost();

  return (
    
    <div className="gallery-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <label>
          First Name:
          <input {...register('firstName')} defaultValue={simulatedPostData.firstName} />
        </label>
        <br />
        <label>
          Last Name:
          <input {...register('lastName')} defaultValue={simulatedPostData.lastName} />
        </label>
        <br />
        <label>
          Image:
          <input {...register('image')} defaultValue={simulatedPostData.image} />
        </label>
        <br />
        <label>
          Views:
          <input type="number" {...register('views')} defaultValue={simulatedPostData.views} />
        </label>
        <br />
        <label>
          Likes:
          <input type="number" {...register('likes')} defaultValue={simulatedPostData.likes} />
        </label>
        <br />
        <label>
          Liked:
          <input type="checkbox" {...register('liked')} defaultChecked={simulatedPostData.liked} />
        </label>
        <br />
        <label>
          Saved:
          <input type="checkbox" {...register('saved')} defaultChecked={simulatedPostData.saved} />
        </label>
        <br />
        <label>
          Level:
          <select {...register('level')} defaultValue={simulatedPostData.level}>
            <option value="Organizational">Organizational</option>
            <option value="Classroom">Classroom</option>
            <option value="Public">Public</option>
          </select>
        </label>
        <br />
        <label>
          Project Title:
          <input {...register('projectTitle')} defaultValue={simulatedPostData.projectTitle} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GalleryForm;
