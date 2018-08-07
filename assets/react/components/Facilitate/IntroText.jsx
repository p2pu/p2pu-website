import React from 'react';

const Orientation = () => (
  <div className="margin-sm">
    <p>Before you create a learning circle, take some time to familiarize yourself with P2PU and the learning circle model. Here you can learn about the history of learning circles, browse through frequently asked questions, and introduce yourself to our virtual facilitator community.</p>
  </div>
)

const CreateLearningCircle = () => (
  <div className="margin-sm">
    <p>To run a learning circle, you’ll need choose a topic, location, date and time to meet. There is a lot to consider, and this space is designed to help you build a successful program. You’ll find discussion on how to identify a good online course, a checklist for preparing for your learning circle, and templates and methods for conducting community needs assessments.</p>
  </div>
)

const Promotion = () => (
  <div className="margin-sm">
    <p>After you’ve created your learning circle, you’ll need to conduct promotion and outreach. Here you’ll find flyer templates, sample messages that you can re-use to promote your learning circle, and discussion with other facilitators how they get folks to show up.</p>
  </div>
)

const Facilitation = () => (
  <div className="margin-sm">
    <p>While learning circle facilitators are not expected to be subject matter experts, there is still a lot to consider to ensure a successful learning experience for you and your peers. Here you’ll find a variety of tips for new facilitators, as well as discussions around common questions like “what if I don’t know the answer to a question?” and “how do I create a supportive learning environment?”. You’ll also find a number of group activities that you can try running in your learning circle.</p>
  </div>
)

const Reflection = () => (
  <div className="margin-sm">
    <p>Like all good things, learning circles must come to an end (usually after 6-8 weeks). This is the place to discuss what comes after learning circles: reflection, evaluation, certification, etc. Among other things, you’ll find a template certificate that you can modify for your learning circle and a discussion about how to evaluate our work in line with your values.</p>
  </div>
)

const Testimony = () => (
  <div className="margin-sm">
    <p>Afterwards, share your experience so others can learn about your journey. Whether you have a funny anecdote or a PhD dissertation, we want to hear about it!</p>
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