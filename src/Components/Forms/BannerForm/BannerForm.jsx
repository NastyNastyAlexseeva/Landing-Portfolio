import { useState, useEffect, useRef } from 'react';

import AvatarEditor from 'react-avatar-editor';
import useResizeObserver from "use-resize-observer";
import Dropzone from 'react-dropzone';

import { Button as BButton } from 'react-bootstrap';
import { Form as BForm } from 'react-bootstrap';

import Banner from '../../Banner';

import Img from '../../../assets/bckg.png';

import cl from './BannerForm.module.scss';

const BannerForm = () => {
  const [fileData, setFileData] = useState();
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [scale, setScale] = useState(1);

  const { ref, width = 320 } = useResizeObserver();

  const handleChange = (e) => {
    setIsLoadingPreview(true);
    setIsCancel(false);
    
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);

    reader.onloadend = () => {
      setFileData(reader.result.toString());
      setIsLoadingPreview(false);
    };
  };

  const handleDrop = (dropped) => {
    setFileData(dropped[0]);
    setIsCancel(false);
    setIsLoadingPreview(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
    setIsCancel(true);
  };

  const handleEdit = () => setIsEdit(true);

  const handleScale = (e) => {
    setScale(+(e.target.value) / 50);
  };

  const handleSave = () => {
    // const canvas = this.editor.getImage().toDataURL();
    // let imageURL;
    // fetch(canvas)
    //   .then(res => res.blob())
    //   .then(blob => (imageURL = window.URL.createObjectURL(blob)));
  };

  return (
    <section className={cl.bannerForm} id="bannerForm" ref={ref}>
      <BForm className={cl.buttonWrapp}>
        {isEdit ? 
          <>
            <BButton className={cl.upload} variant="primary">
              <label from='uploadImage'>Change photo</label>
              <input onChange={handleChange} id='uploadImage' type='file' />
            </BButton>
            <BButton onClick={handleSave} className={cl.save} variant="primary">Save</BButton>
            <BButton onClick={handleCancel} className={cl.cancel} variant="primary">Cancel</BButton>
          </>
          :
          <BButton onClick={handleEdit} className={cl.save} variant="primary">Edit</BButton>
        }
      </BForm>
      {isEdit && !isCancel ?
        <Dropzone
          onDrop={handleDrop}
          noClick
          noKeyboard
          style={{ width: '100%', height: '250px' }}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <AvatarEditor
                image={fileData ? fileData : Img }
                width={width}
                height={350}
                border={0}
                color={[0, 0, 0, 0.6]}
                scale={scale}
                rotate={0}
              />
              <input className={cl.scale} type="range" onChange={handleScale}/>
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone> :
        <Banner isLoading={isLoadingPreview} src={ fileData && !isCancel ? fileData : Img } />
      }
    </section>
  );
}

export default BannerForm;