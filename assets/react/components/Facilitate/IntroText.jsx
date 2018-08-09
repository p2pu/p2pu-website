import React from 'react';

const Orientation = () => (
  <div className="margin-sm">
    <p>Before you create a learning circle, familiarize yourself with P2PU and the learning circle model. Here you can read about the history of learning circles, browse through FAQs, and introduce yourself to our virtual facilitator community.</p>
  </div>
)

const CreateLearningCircle = () => (
  <div className="margin-sm">
    <p>To run a learning circle, you will need choose a topic, location, date and time to meet. Here you will find discussion on how to identify a good online course, a checklist for preparing for your learning circle, and templates and methods for conducting community needs assessments.</p>
  </div>
)

const Promotion = () => (
  <div className="margin-sm">
    <p>After you have created your learning circle, you will need to conduct promotion and outreach. Here you can find flyer templates, sample messages to promote your learning circle, and discussion with other facilitators about how they get folks to show up.</p>
  </div>
)

const Facilitation = () => (
  <div className="margin-sm">
    <p>While facilitators are not expected to be subject experts, there is still a lot to be aware of. Here you will find a variety of tips for new facilitators, as well as discussions around common questions like “what if I do not know the answer to a question?” and “how do I create a supportive learning environment?”. You will also find group activities that you can run in your learning circle.</p>
  </div>
)

const Reflection = () => (
  <div className="margin-sm">
    <p>Like all good things, learning circles must come to an end (usually after 6-8 weeks). Here you can discuss reflection, evaluation, certification, and how to continue supporting learners.</p>
  </div>
)

const Testimony = () => (
  <div className="margin-sm">
    <p>After your learning circle, share your experience so others can learn about your journey. Whether you have a funny anecdote or a PhD dissertation, we want to hear it!</p>
  </div>
)


const introMap = {
  "orientation": Orientation,
  "creating-a-learning-circle": CreateLearningCircle,
  "promotion-and-outreach": Promotion,
  "facilitation": Facilitation,
  "reflection-and-wrap-up": Reflection,
  "testimony": Testimony,
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