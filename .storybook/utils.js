import { withInfo } from '@storybook/addon-info';

const storyInfoStyle = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '25px',
      display: 'box',
      lineHeight: '1'
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0
    },
    h2: {
      display: 'inline',
      color: '#999',
      fontSize: '18px',
      lineHeight: '1'
    }
  },
  infoBody: {
    padding: '0 5px',
    lineHeight: '2',
    borderRadius: '0',
    border: 'none',
    boxShadow: 'none'
  }
};

export const StoryInfo = (text, inline, header, source) => (
  withInfo({ 
    inline: inline, 
    source: source, 
    styles: storyInfoStyle, 
    header: header, 
    text: text
  })
);