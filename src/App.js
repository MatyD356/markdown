import React from "react";
import marked from "marked";
import "./App.css";

marked.setOptions({
  breaks: true
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ``
    };
  }
  getMarkdownText() {

    const rawMarkup = marked(this.state.input);
    return { __html: rawMarkup };
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  componentDidMount() {
    document.getElementById("editor").value = placeholder;
    document.getElementById("preview").innerHTML = marked(placeholder);
    marked.setOptions({
      breaks: true,
      gfm: true
    })
  }

  render() {
    return (
      <div className="App">
        <div className="editor">
          <p className="editor__header">Editor</p>
          <textarea
            id="editor"
            className="editor__textArea"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            type="text"
          ></textarea>
        </div>
        <div className="preview">
          <p className="preview__header">Preview</p>
          <div
            id="preview"
            className="preview__view"
            dangerouslySetInnerHTML={this.getMarkdownText()}
          ></div>
        </div>
      </div>
    );
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
export default App;
