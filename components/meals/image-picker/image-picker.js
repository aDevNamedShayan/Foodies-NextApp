'use client'

import { useRef, useState } from 'react';

import styles from './image-picker.module.css'
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState()
  const imageInputRef = useRef()

  function handlePickerClick() {
    imageInputRef.current.click()
  }

  function handleImageChange(event) {
    const file = event.target.files[0]
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPickedImage(fileReader.result)
      console.log(fileReader.result)
    }
    fileReader.readAsDataURL(file)

  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>Pick an Image! </p>}
          {pickedImage && 
            <Image 
              src={pickedImage} 
              alt='The selected image.' 
              fill 
            />
          }
        </div>
        <input
          className={styles.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type='button' onClick={handlePickerClick}>Pick an Image</button>
      </div>
    </div>
  );
}
