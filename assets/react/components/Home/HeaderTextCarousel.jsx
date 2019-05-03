import React from 'react'
import ReactDOM from "react-dom";
import Typist from 'react-typist'

const phrases = [
  'Master public speaking',
  'Build a website',
  'Start writing fiction',
  'Perfect your resume',
  'Hone your interview skills',
  'Write a business plan',
  'Prep for a citizenship exam',
  'Speak English with confidence',
  'Design an online course',
  'Become a better writer',
]

const defaultTypistProps = {
  blink: true,
  avgTypingDelay: 70,
  cursor: {
    hideWhenDone: false
  }
}

const interval = 2000

class HeaderTextCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPhraseIndex: 0 }
    this.phraseContainer = React.createRef()
  }

  componentDidMount() {
    this.renderTypistToContainer()
  };

  componentWillUnmount() {
    clearTimeout(this.timerId);
    const domNode = this.phraseContainer.current;
    ReactDOM.unmountComponentAtNode(domNode);
  }

  loopPhrase = () => {
    const nextPhraseIndex = this.state.currentPhraseIndex === (phrases.length - 1) ? 0 : this.state.currentPhraseIndex + 1
    this.setState({ currentPhraseIndex: nextPhraseIndex })
  };

  handleTypingDone = () => {
    setTimeout(() => {
      this.renderTypistToContainer()
    }, interval)
  };

  renderTypistToContainer = () => {
    const domNode = this.phraseContainer.current;
    const typistProps = { ...defaultTypistProps, onTypingDone: this.handleTypingDone }
    const phrase = phrases[this.state.currentPhraseIndex];

    ReactDOM.unmountComponentAtNode(domNode);
    ReactDOM.render(
      <Typist {...typistProps}>{ phrase }</Typist>,
      domNode
    );

    this.loopPhrase()
  };

  render() {
    return (
      <h1 className="bold centered">
        <span ref={this.phraseContainer} />
        <span>in your neighborhood, for free. </span>
      </h1>
    );
  }
}

export default HeaderTextCarousel
