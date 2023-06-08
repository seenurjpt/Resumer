import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
  ArrowRight,
} from "react-feather";
import "./Resume.css";

const Resume =forwardRef((props,ref) => {
  const information = props.information;
  const sections = props.sections;
  const containerRef=useRef()
  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.workExp]: (
      <div
        key={"workExp"}
        draggable
        onDragOver={() => seTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`section workExp ${
          info.workExp?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">
          <p>{info.workExp?.sectionTitle}</p>
        </div>
        <div className="content">
          {info.workExp?.details?.map((item) => (
            <div className="content-item" key={item.title}>
              {item.title && <p className="content-title">{item.title}</p>}
              {item.companyName && (
                <p className="content-subtitle mb-3">{item.companyName}</p>
              )}
              {item.certificationLink && (
                <a href={item.certificationLink} target="_blank">
                  <Paperclip />
                  {item.certificationLink}
                </a>
              )}
              {item.startDate && item.endDate ? (
                <div className="content-date">
                  <Calendar />
                  {getFormattedDate(item.startDate)} {"- "}
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                " "
              )}
              {item.location && (
                <p className="work-location">
                  <MapPin /> {item.location}
                </p>
              )}

              {item.points?.length > 0 && (
                <div className="list-style">
                  <ul className="content-points list-disc">
                    {item.points?.map((elem, index) => (
                      <li className="content-point " key={elem + index}>
                        {elem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => seTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`section project ${
          info.project?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">
          <p>{info.project?.sectionTitle}</p>
        </div>
        <div className="content">
          {info.project?.details?.map((item) => (
            <div className="content-item">
              {item.title && <p className="content-title mb-3">{item.title}</p>}
              {item.link && (
                <a href={item.link} target="_blank">
                  <Paperclip />
                  {item.link}
                </a>
              )}
              {item.github && (
                <a href={item.github} target="_blank">
                  <GitHub />
                  {item.github}
                </a>
              )}
              {item.overview && (
                <p className="overview ">
                  <ArrowRight /> {item.overview}
                </p>
              )}

              {item.points?.length > 0 && (
                <div className="list-style">
                  <ul className="content-points list-disc">
                    {item.points?.map((elem, index) => (
                      <li className="content-point" key={elem + index}>
                        {elem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => seTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`section education ${
          info.education?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">
          <p>{info.education?.sectionTitle}</p>
        </div>
        <div className="content">
          {info.education?.details?.map((item) => (
            <div className="content-item">
              {item.title && <p className="content-title">{item.title}</p>}
              {item.college && (
                <p className="content-subtitle mb-3">{item.college}</p>
              )}
              {item.startDate && item.endDate ? (
                <div className="content-date">
                  <Calendar />
                  {getFormattedDate(item.startDate)} {"- "}
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                " "
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => seTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`section achievement ${
          info.achievement?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">
          <p>{info.achievement?.sectionTitle}</p>
        </div>
        <div className="list-style">
          <ul className="achivements-list mt-2 list-disc">
            {info?.achievement?.points?.map((elem, index) => (
              <li key={elem + index}>{elem}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summary"}
        draggable
        onDragOver={() => seTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
        className={`section summary ${
          info.summary?.sectionTitle ? "" : "hidden"
        }`}
      >
        <div className="sectionTitle">
          <p>{info.summary?.sectionTitle}</p>
        </div>
        <div className="content">
          <p className="content-summary mb-3">{info.summary?.detail}</p>
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => seTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`section other ${info.other?.sectionTitle ? "" : "hidden"}`}
      >
        <div className="sectionTitle">
          <p>{info.other?.sectionTitle}</p>
        </div>
        <div className="content">
          <p className="content-other mb-3">{info.other?.detail}</p>
        </div>
      </div>
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [sections.project, sections.education, sections.summary],
      [sections.workExp, sections.achievement, sections.other],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  return (
    <div ref={ref}>
    <div className="bgcolor resume-resume" ref={containerRef}>
      <div className="resume-section ">
        <div className="resume-header">
          {info.basicInfo?.detail?.name ? (
            <p className="resume-heading">{info.basicInfo?.detail?.name}</p>
          ) : (
            <p className="resume-heading">Your Name</p>
          )}
          {info.basicInfo?.detail?.title ? (
            <p className="resume-subheading">{info.basicInfo?.detail?.title}</p>
          ) : (
            <p className="resume-subheading">Title (e.g. Fronend Developer)</p>
          )}

          <div className="resume-links">
            {info.basicInfo?.detail?.email ? (
              <a href="" className="resume-link">
                <AtSign /> {info.basicInfo?.detail?.email}
              </a>
            ) : (
              <a href="" className="resume-link">
                <AtSign /> Email
              </a>
            )}

            {info.basicInfo?.detail?.phone ? (
              <a href="" className="resume-link">
                <Phone /> {info.basicInfo?.detail?.phone}
              </a>
            ) : (
              <a href="" className="resume-link">
                <Phone />
                Mobile Number
              </a>
            )}

            {info.basicInfo?.detail?.linkedin ? (
              <a
                href={info.basicInfo?.detail?.linkedin}
                target="_blank"
                className="resume-link"
              >
                <Linkedin /> Linkedin
              </a>
            ) : (
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="resume-link"
              >
                <Linkedin />
                Linkedin
              </a>
            )}

            {info.basicInfo?.detail?.github ? (
              <a
                href={info.basicInfo?.detail?.github}
                target="_blank"
                className="resume-link"
              >
                <GitHub /> GitHub
              </a>
            ) : (
              <a
                href="https://www.github.com"
                target="_blank"
                className="resume-link"
              >
                <GitHub />
                GitHub
              </a>
            )}
          </div>
        </div>

        <div className="resume-main">
          <div className="col1">
            {columns[0].map((item) => sectionDiv[item])}
          </div>
          <div className="col2">
            {columns[1].map((item) => sectionDiv[item])}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
});

export default Resume;
