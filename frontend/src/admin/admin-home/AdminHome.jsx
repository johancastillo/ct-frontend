import { useEffect, useRef, useState } from 'react'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File


const AdminHome = (props) => {
  const editorRef = useRef();
  useEffect(() => {
    // Get underlining core object here
    // Notice that useEffect is been used because you have to make sure the editor is rendered.
    console.log(editorRef.current.editor.core);
  }, []);

  useEffect(() => {

  }, [])

  const handleImageUploadBefore = (files, info, uploadHandler) => {
    // uploadHandler is a function
    console.log(files, info)
  }

  const handleImageUpload = (targetImgElement, index, state, imageInfo, remainingFilesCount) => {
    console.log(targetImgElement, index, state, imageInfo, remainingFilesCount)
  }


  return (
    <div className="card p-5 ">
      <h1 className="text-center">Create one new product</h1>

      <input type="text" className="form-control" placeholder="Title" name="" />

      <br />

      <SunEditor ref={editorRef} lang="es" width="100%" height="200" placeholder="Please type here..."
        enableToolbar={true} onImageUploadBefore={handleImageUploadBefore} onImageUpload={handleImageUpload}
        onChange={(content) => console.log(content)} onImageUploadBefore={handleImageUploadBefore}
      />

      <br />

      <button>Guardar</button>
    </div>
  )
}

export default AdminHome
