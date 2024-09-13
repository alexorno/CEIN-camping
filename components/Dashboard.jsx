import { useState, useEffect, useRef } from 'react';
import AvatarUploadPage from './AvatarUploadPage';
import { upload } from '@vercel/blob/client';
// import { upload } from '@vercel/blob/client';

export const Dashboard = ({setAuthFalse}) => {
    const [logOut, setLogOut] = useState(false);
    const [formValues, setFormValues] = useState();
    const [sendLoading, setSendLoading] = useState(false);
    const [responseFileSend, setResponseFileSend] = useState();
    const [categories, setCategories] = useState([])

    useEffect(() => {
      fetch('/api/getCategories')
        .then((res) => res.json())
        .then((data) => {
            setCategories(data)
        });
    }, [])
          
    // rewrite in const, no need for effect
    useEffect(() => {
    if(logOut){
        setLogOut(false);
        fetch('/api/adminLogOut', {method: 'POST'})
        .then((res) => {
            if(res.status == 200){
            setAuthFalse();
            }
            return res.json()})
        .then((data) => console.log(data))
    }
    }, [logOut])

    const inputFileRef = useRef();

    const fileSend = async (event) => {
        event.preventDefault();
        await setSendLoading(true)
        const urlList =[];
        // uploading images to blob and adding to array
        for(const fileRef of inputFileRef.current.files){
            const file = fileRef;

            const newBlob = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: 'api/avatar/upload',
            });
            // console.log('new', newBlob)
            urlList.push(newBlob)
        }
        // getting values from form and formatting
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData);
        // console.log(formObject)
        delete formObject.file;
        formObject.urls = urlList;
        fetch('/api/uploadProduct', {
            method: "POST",
            body: JSON.stringify(formObject),
          })
            .then((res) => res.json())
            .then((data) => {
                setSendLoading(false);
                setResponseFileSend(data)
            });
    }

    const eventSend = async (event) => {
      event.preventDefault();
      await setSendLoading(true)
      const urlList =[];
      // uploading images to blob and adding to array
      for(const fileRef of inputFileRef.current.files){
          const file = fileRef;

          const newBlob = await upload(file.name, file, {
          access: 'public',
          handleUploadUrl: 'api/avatar/upload',
          });

          urlList.push(newBlob)
      }
      // getting values from form and formatting
      const formData = new FormData(event.target);
      const formObject = Object.fromEntries(formData);
      // console.log(formObject)
      delete formObject.file;
      formObject.urls = urlList;
      fetch('/api/uploadEvent', {
          method: "POST",
          body: JSON.stringify(formObject),
        })
          .then((res) => res.json())
          .then((data) => {
              setSendLoading(false);
              setResponseFileSend(data)
          });
  }


    return (
    <>
      <form className='admin-login' onSubmit={() => fileSend(event)}>
        <h3>Add product</h3>
        <label htmlFor='file' >Images:</label>
        <input name="file" ref={inputFileRef} type="file" multiple required />
        <label htmlFor="name">Name:</label>
        <input type='text' name='name'/>
        <label htmlFor="description">Description:</label>
        <textarea type='text' name='description'/>
        <label htmlFor="color">Color:</label>
        <input type='text' name='color'/>
        <label htmlFor="material">Material:</label>
        <input type='text' name='material'/>
        <label htmlFor="occupcapacity">Occupancy Capacity:</label>
        <input type='number' name='occupcapacity'/>
        <label htmlFor="dimensions">Dimensions:</label>
        <input type='text' name='dimensions'/>
        <label htmlFor="Price">Price:</label>
        <input type='text' name='price'/>

          <label htmlFor="categories">Choose a category:</label>
          <select name="categoryId" >
            {categories.map((category) => (
              <option value={category.id} key={category.id}>{category.name}</option>
            ))}
          </select>
          <label htmlFor="seasons">Choose a Season:</label>
          <select name="seasons" >
            <option value='null'>Not Applicable</option>
            <option value='summer'>Summer</option>
            <option value='fall'>Fall</option>
            <option value='winter'>Winter</option>
            <option value='spring'>Spring</option>
          </select>
          <br />
          <input type='reset'/>

      {sendLoading ? 
      <p style={{display: 'flex', justifyContent: 'center'}}>Loading....</p> 
      : 
      <input type='submit' value="Submit"/>}
      <p>{JSON.stringify(responseFileSend)}</p>
      </form>
  
  
      <button className='main-btn'
      style={{color: 'black', margin: 'auto', display: 'flex', border: '1px solid black', padding: '1% 2%'}}
      onClick={() => setLogOut(true)}
      >Log Out</button>


    <form className='admin-login' onSubmit={() => eventSend(event)}>
        <h3>Add event</h3>
        <label htmlFor='images'>Images:</label>
        <input name="images" ref={inputFileRef} type="file" multiple/>
        <label htmlFor="title">Title:</label>
        <input type='text' name='title'/>
        <label htmlFor="description">Description:</label>
        <textarea type='text' name='description'/>
        <label htmlFor='date'>Date at which event will take place:</label>
        <input type='datetime-local' name='date' />
        <label htmlFor='location'>Name of location:</label>
        <input type='text' name='location' />
        <label htmlFor='location_link'>Link to location on maps:</label>
        <input type='text' name='location_link' />

        <label htmlFor='instagram_link'>Link to instagram</label>
        <input type='text' name='instagram_link' />
        <label htmlFor='facebook_link'>Link to facebook</label>
        <input type='text' name='facebook_link' />
        <label htmlFor='twitter_link'>Link to twitter</label>
        <input type='text' name='twitter_link' />


        {sendLoading ? 
      <p style={{display: 'flex', justifyContent: 'center'}}>Loading....</p> 
      : 
      <input type='submit' value="Submit"/>}
      <p>{JSON.stringify(responseFileSend)}</p>
    </form>
    </>
    )
  }

  export default Dashboard;