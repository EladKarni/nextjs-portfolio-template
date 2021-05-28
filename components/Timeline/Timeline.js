import React from "react";
import { timelineData as jobs } from "../../content";
import SectionTitle from "../SectionTitle/SectionTitle";

import Styles from "./Timeline.module.scss";

const Timeline = () => (
  <div className={Styles.Timeline}>
    <SectionTitle>Job Timeline</SectionTitle>
    <div className={Styles.TimelineContainer}>
      {jobs.map((data, idx) => (
        <div
          data-aos={idx % 2 == 0 ? "fade-left" : "fade-right"}
          className={Styles.TimelineItem}
          key={idx}
        >
          <div className={Styles.TimelineContent}>
            <h4>{data.company}</h4>
            <h5>{data.title}</h5>
            <time>{data.date}</time>
            <p>{data.text}</p>
            <span className={Styles.Circle} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;
