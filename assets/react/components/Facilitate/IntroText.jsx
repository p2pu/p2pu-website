import React from 'react';

const GettingStarted = () => (
  <p>Here you will find a checklist that outlines the steps needed to get your Learning Circle running. Do not worry - each of these steps is explained in the following pages. You can compress or expand this timeline to suit your needs. However, if you don’t already have a dedicated group of learners, we recommend spending four weeks promoting your Learning Circle once you’ve finalized the date, time, course, and location.</p>
)

const Courses = () => (
  <p>If you’ll be working with learners who aren’t fully employed, you may want to choose a course that supports finding new work or skilling up (such as resume writing, public speaking, or academic writing). Be sure to look at the prerequisites for the courses and make sure the content isn’t too basic or too advanced and advertise appropriately.</p>
)

const Promotion = () => (
  <p>Now that your materials are ready, you can start identifying learners. Nobody understands your networks better than you do, so you’ll know the best way to reach them. We’ve provided templates that you can use to get started in a number of different mediums.</p>
)

const FacilitationTips = () => (
  <p>Everyone attends Learning Circles for different reasons. Some people want to build social relationships in a quasi-academic setting, others are there because they want to learn the skills they need to get a new job, and others attend purely for the sake of learning something new. As a facilitator, it is your job to understand each individual’s motivation for joining and cultivate an environment in which learners can clearly see how the Learning Circle will help them achieve their desired goals.</p>
)

const Activites = () => (
  <p>Everyone attends Learning Circles for different reasons. Some people want to build social relationships in a quasi-academic setting, others are there because they want to learn the skills they need to get a new job, and others attend purely for the sake of learning something new. As a facilitator, it is your job to understand each individual’s motivation for joining and cultivate an environment in which learners can clearly see how the Learning Circle will help them achieve their desired goals.</p>
)

const WrappingUp = () => (
  <p>Everyone attends Learning Circles for different reasons. Some people want to build social relationships in a quasi-academic setting, others are there because they want to learn the skills they need to get a new job, and others attend purely for the sake of learning something new. As a facilitator, it is your job to understand each individual’s motivation for joining and cultivate an environment in which learners can clearly see how the Learning Circle will help them achieve their desired goals.</p>
)

const introMap = {
  "getting-started": GettingStarted,
  "courses": Courses,
  "promotion": Promotion,
  "facilitation-tips": FacilitationTips,
  "activities": Activites,
  "wrapping-up": WrappingUp,
}

const IntroText = ({ section }) => {
  const Content = introMap[section];

  return (
    <div className="resource-category-intro row">
      <div className="col-xs-12">
        <Content />
      </div>
    </div>
  )
}

export default IntroText;