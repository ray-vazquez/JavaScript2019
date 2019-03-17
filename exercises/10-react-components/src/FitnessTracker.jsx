/**
 * Build a fitness tracker app using two React components.
 * You will need to loop through the data from *./FitnessTrackerActivities.json*.
 * I suggest you open this file and take a look at it.
 * You cannot have any errors or warmings in the console when you render the app
 *
 * Here is the static HTML that you will work with inside React components.
 * You will need to convert this to JSX.
 * ```html
 * <main class="FitnessTracker">
 *   <!-- This part is repeated for each fitness activity (each run, hike or cycling trip tracked) -->
 *   <div class="FitnessActivity">
 *     <div class="FitnessActivity-startDate">2018-09-15 07:10:05</div>
 *     <div class="FitnessActivity-activity">Running</div>
 *     <div class="FitnessActivity-miles">3.1 miles</div>
 *     <div class="FitnessActivity-time">29:35</div>
 *   </div>
 * </main>
 * ```
 */

import React from "react";
import "./FitnessTracker.css";
import activities from "./FitnessTrackerActivities.json";

// You will need to loop through "activities" data in your React components below

const FitnessActivity = () => {
  return activities.map(item => {
    return (
      <div className="FitnessActivity">
        <div className="FitnessActivity-startDate">{item.startDate}</div>
        <div className="FitnessActivity-activity">{item.activity}</div>
        <div className="FitnessActivity-miles">{item.miles}</div>
        <div className="FitnessActivity-time">{item.time}</div>
      </div>
    );
  });
};
class FitnessTracker extends React.Component {
  render() {
    return (
      <div>
        <FitnessActivity />
      </div>
    );
  }
}

export default FitnessTracker;
