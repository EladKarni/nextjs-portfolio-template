import React from 'react'
import { timelineData as jobs } from '../../content'

import Styles from './Timeline.module.scss'

const Timeline = () => (
    <div className={Styles.Timeline}>
        <h2>Job Timeline</h2>
        <div className={Styles.TimelineContainer}>
            {jobs.map((data, idx) => (
                <div className={Styles.TimelineItem} key={idx}>
                    <div className={Styles.TimelineContent}>
                        <time>{data.date}</time>
                        <h4>{data.company}</h4>
                        <h4>{data.title}</h4>
                        <p>{data.text}</p>
                        <span className={Styles.Circle} />
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default Timeline
