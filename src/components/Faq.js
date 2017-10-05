import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import stringSimilarity from 'string-similarity';
import { ThemeProvider } from 'styled-components';
import BodyClassName from 'react-body-classname';

//import Slogan from './Slogan';

//import stylesheets
import '../style/index.css';
import '../style/Faq.css';

class FAQ extends Component {

//search terms to filter through
  renderSteps() {
    const searchTerms = [
      'Does it work on Android?',
      'Does it work on Iphone?',
      'How do you change the the name of the horse in the app?',
    ];

//Answers related to search terms
    const answerTerms = {
      'Does it work on Android?': 'Of course, you can find it on Google Play.',
      'Does it work on Iphone?': 'Of course, you can find it on Google Play.',
      'How do you change the the name of the horse in the app?': 'Go to your profile and select the horse you want to edit. Tap the edit icon in the top right corner and change the name of the horse.',
    };

    return [
      {
        id: 'start',
        message: 'Hi! How can we help you?',
        trigger: 'question',
      },
      {
        id: 'question',
        user: true,
        trigger: 'user_input',
      },
      {
        id: 'user_input',
        message: (value) => {
          //filter through searchterms
          const inputMatch = stringSimilarity.findBestMatch(value.steps.question.message, searchTerms);
          //Find the best match from searchterms
          const result = inputMatch.bestMatch.target;

          //Output answer
          return result + ' ' + answerTerms[result];
        },
        trigger: 'answer',
      },
      {
        id: 'answer',
        message: 'Are you pleased with the answer?',
        trigger: 'user_replay',
      },
      {
        id: 'user_replay',
        options: [
          { value: 1, label: 'Yes', trigger: 'finish' },
          { value: 2, label: 'No', trigger: 'start' },
        ],
      },
      {
        id: 'finish',
        message: 'Thank you for your time!',
        end: true,
      },
    ];
  };

//Changing the theme style
  renderTheme() {
    return {
      background: 'transparent',
      fontFamily: 'Avenir-Medium',
      botBubbleColor: '#47A8A5',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    };
  };

//Change the bots style
  botStyle() {
    return {
      borderRadius: '5px',
      overflow: 'auto',
      boxShadow: '0 0 0 transparent',
    };
  };

  inputStyle() {
    return {
      borderRadius: '5px',
    };
  };

  render() {
    return (
      <BodyClassName className="faq-background">
        <ThemeProvider theme={this.renderTheme()}>
          <ChatBot steps={this.renderSteps()}
            hideBotAvatar={true}
            hideHeader={true}
            hideUserAvatar={true}
            bubbleStyle={this.botStyle()}
            contentStyle={this.botStyle()}
            placeholder={'Type message...'}
            style={this.botStyle()}
            inputStyle={this.inputStyle()}
          />
        </ThemeProvider>
      </BodyClassName>
      );
    }
}

export default FAQ;
