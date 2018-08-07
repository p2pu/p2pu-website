import React from 'react';

const Orientation = () => (
  <div className="margin-sm">
    <p>Here you will find everything you need to help orient you to the concept of learning circles.</p>
    <p>If this is your first time here, we recommend you explore some of the <a href="https://community.p2pu.org/t/how-is-a-learning-circle-different-from-a-class/2723">videos</a> and <a href="https://community.p2pu.org/t/what-is-a-learning-circle/2689">activities</a>. Once you are ready to get started, have a look at the learning circle <a href="https://community.p2pu.org/t/timeline-checklist-for-starting-a-learning-circle/2755/1">timeline and checklist</a>.</p>
  </div>
)

const CreateLearningCircle = () => (
  <div className="margin-sm">
    <p>This space is designed to complement our <a href="https://www.p2pu.org/en/courses">public database of courses</a> and help you find the right course for your needs.</p>
    <p>This is also the space to discuss specific topic areas in more depth, such as <a href="https://community.p2pu.org/t/basic-computer-literacy/2716/2">basic computer literacy</a>.</p>
  </div>
)

const Promotion = () => (
  <div className="margin-sm">
    <p>This is the place to discuss promotion, outreach, and community engagement for learning circles.</p>
    <p>You’ll find <a href="https://community.p2pu.org/t/learning-circle-flyers/2744">flyer templates</a>, documentation of <a href="https://community.p2pu.org/t/q-method-for-documenting-community-interests/2699/2">methods for reaching new patrons</a>, and feedback from facilitators on <a href="https://community.p2pu.org/t/what-if-nobody-shows-up/2728">how they get folks to show up</a>.</p>
  </div>
)

const Facilitation = () => (
  <div className="margin-sm">
    <p>This is the place to discuss facilitation styles and strategies, and to share activities that we’ve found work well during learning circles.</p>
    <p>Here you’ll find discussions around common questions like <a href="https://community.p2pu.org/t/what-if-i-don-t-know-the-answer-to-a-question/2750/1">"what if I don’t know the answer to a question?"</a>" and <a href="https://community.p2pu.org/t/tips-for-new-facilitators/2730">"what tips do you have for first time facilitators?"</a></p>
    <p>You’ll also find a number of group activities that you can try running in your learning circle. If you’d like to create a new activity, <a href="https://docs.google.com/document/d/1QhgZbwdycyqs7YHDGMJ96dqndq6h1m-URmaPZS988ds/edit">use this template</a> and post it as a new topic!</p>
  </div>
)

const Reflection = () => (
  <div className="margin-sm">
    <p>This is the place to discuss what comes after learning circles: reflection, evaluation, certification, etc.</p>
    <p>Among other things, you’ll find a <a href="https://community.p2pu.org/t/can-learning-circle-participants-receive-certificates-or-accreditation/2745">template certificate</a> that you can modify for your learning circle and a discussion about <a href="https://community.p2pu.org/t/how-we-evaluate-our-work/2746/1">how we evaluate our work</a> in line with our values.</p>
  </div>
)


const introMap = {
  "orientation": Orientation,
  "creating-a-learning-circle": CreateLearningCircle,
  "promotion-and-outreach": Promotion,
  "facilitation": Facilitation,
  "reflection": Reflection,
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