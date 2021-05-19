import React from 'react'
import { timelineData as jobs } from '../../content'

import Styles from './Timeline.module.scss'

const Timeline = () => (
    <div className={Styles.Timeline}>
        <h2>Job Timeline</h2>
        <div className={Styles.TimelineContainer}>
            {jobs.map((data, idx) => (
                <div data-aos={idx % 2 == 0 ? "fade-left" : "fade-right"} className={Styles.TimelineItem} key={idx}>
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
)

export default Timeline
