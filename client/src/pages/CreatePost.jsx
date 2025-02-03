import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Write Your Query</h1>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1'
          />
          <Select>
            <option value='uncategorized'>Select a category</option>
            <option value='College Based'>College Based</option>
            <option value='Hostel Based'>Hostel Based</option>
            <option value='Transport Based'>Transport Based</option>
          </Select>
        </div>
        
        <ReactQuill
          theme='snow'
          placeholder='Type Here...'
          className='h-72 mb-12'
          required
        />
        <Button type='submit' className='bg-gradient-to-r from-black via-gray-900 to-gray-600 hover:bg-gradient-to-l to-gray-600 via-gray-900 from-black'>
          Post
        </Button>
      </form>
    </div>
  );
}