import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';
 
export default function AvatarUploadPage({sendUrlToParent}) {
  const inputFileRef = useRef(null);


  const fileSend = async (event) => {
    event.preventDefault();
    const array1 =[];
    for(const fileRef of inputFileRef.current.files){
      const file = fileRef;

      const newBlob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: 'api/avatar/upload',
      });

      array1.push(newBlob)
    }

    

    console.log(array1, '123')
    sendUrlToParent(array1)
    }

  return (
    <>
      <h1>Upload Your Avatar</h1>
 
      <form
        onSubmit={() => fileSend(event)}
      >
        <input name="file" ref={inputFileRef} type="file" multiple required />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}