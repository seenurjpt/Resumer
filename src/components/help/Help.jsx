import React from 'react'
import "./Help.css"
const Help = () => {
  return (
    <div className="help-help bgcolor">
        <h1>How to Use?</h1>
    <div className='help-section'>
      <div>
        <ol className='list-decimal'>
            <li>It is simple to use, Just fill your details with editor and click on "Save" Button. Your changes with details will reflect in the resume preview below the editor.</li>
            {/* <p>Your changes with details will reflect in the resume preview below the editor.</p> */}
            <li>You can change the placing of any section by just doing simple drag and drop.</li>
            <li>You can change colors by selecting color from color pallete.</li>
            <li>If you want to delete a section, Just empty the title of that section then click "Save".</li>
            <li>You cannot add other sections, you have to use existing sections only.</li>
            <li>You can download the resume by clicking on "Download" button.</li>
        </ol>
      </div>
    </div>
    </div>
  )
}

export default Help
