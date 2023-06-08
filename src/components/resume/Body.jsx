import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ArrowDown, Edit2 } from 'react-feather';
import ReactToPrint from 'react-to-print';
import "./Body.css"
import Editor from '../editor/Editor';
import Resume from './Resume';

const Body = () => {
    const colors = ["#1B76FF", "#41A86C", "#FF0000", "#FF3659", "#ED8936"];
    const sections = {
      basicInfo: "Basic Info",
      workExp: "Work Experience",
      project: "Projects",
      education: "Education",
      achievement: "Achievements",
      summary: "Summary",
      other: "Other",
    };

    const resumeRef = useRef()
    const [activeColor, setActiveColor] = useState(colors[0]);
    const [resumeInformation, setResumeInformation] = useState({
      [sections.basicInfo]: {
        id: sections.basicInfo,
        sectionTitle: sections.basicInfo,
        detail: {},
      },
      [sections.workExp]: {
        id: sections.workExp,
        sectionTitle: sections.workExp,
        details: [],
      },
      [sections.project]: {
        id: sections.project,
        sectionTitle: sections.project,
        details: [],
      },
      [sections.education]: {
        id: sections.education,
        sectionTitle: sections.education,
        details: [],
      },
      [sections.achievement]: {
        id: sections.achievement,
        sectionTitle: sections.achievement,
        points: [],
      },
      [sections.summary]: {
        id: sections.summary,
        sectionTitle: sections.summary,
        detail: "",
      },
      [sections.other]: {
        id: sections.other,
        sectionTitle: sections.other,
        detail: "",
      },
    });

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#000000"),
        backgroundColor: "#0066ff",
        borderRadius:"20px",
        '&:hover': {
            transform: "scale(1.02)",
            backgroundColor: "#0066ff",
            boxShadow: "0 0 5px var(--text-color)",
        },
      }));

      useEffect(()=>{
      },[resumeInformation])
  return (
    <div className='body-section bgcolor' >
        <div className='rb flex justify-center'>
      <p >Resume Builder </p><div className='pt-4 pl-1'><Edit2 id='pencil'/></div>
      </div>

      <div className='flex justify-evenly  align-middle gap-5 p-10 '>

        <div className='colors-pallate'>
            {
                colors.map((item,index)=>{
                    return(
                        <div id='ll' key={index} style={{backgroundColor:item}} onClick={() => setActiveColor(item)} className={`${activeColor === item ? "color-active" : ""}`}/>
                    )
                })
            }
        </div>
        <ReactToPrint
          trigger={()=>{
            return <ColorButton variant="contained" id='d-b'>Download <ArrowDown id='dnld-arr' /></ColorButton>
          }}
          content={()=> resumeRef.current}
        />
        
      </div>
      <Editor sections={sections} information={resumeInformation} clrbtn={ColorButton} setInformation={setResumeInformation}/>
      <Resume sections={sections} information={resumeInformation} activeColor={activeColor} ref={resumeRef}/>

    </div>
  )
}

export default Body
