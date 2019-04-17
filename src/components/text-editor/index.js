import React from 'react'
import {Editor, EditorState, RichUtils, getDefaultKeyBinding, ContentState, convertFromHTML} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import { InlineStyleControls } from './inline-controls';
import { BlockStyleControls } from './block-controls';

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: "'Inconsolata', 'Menlo', 'Consolas', monospace'",
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

class BaseEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: this.props.value ? EditorState.createWithContent(this.getStateFromProps(this.props.value)) : EditorState.createEmpty()
    };
    this.focus = () => this.refs.editor.focus();
  }

  getStateFromProps = (value) => {
    const newContentState = convertFromHTML(value)
    return ContentState.createFromBlockArray(
      newContentState.contentBlocks,
      newContentState.entityMap
    )
  }

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  mapKeyToEditorCommand = e => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4, /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  toggleBlockType = blockType => {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  toggleInlineStyle = inlineStyle => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
      editorContentHtml: stateToHTML(editorState.getCurrentContent())
    })

    const anchorKey = editorState.getSelection().getAnchorKey();
    const currentContent = editorState.getCurrentContent().getBlockForKey(anchorKey).getText();

    this.props.validation(!!currentContent)
    this.props.onContentChange({target: {value: stateToHTML(editorState.getCurrentContent()), name: this.props.name}})
  }

  render() {
    const {editorState} = this.state;
    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }
    return (
      <div className='RichEditor-root'>
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this.mapKeyToEditorCommand}
            onChange={this.onChange}
            placeholder='Write the text'
            ref='editor'
            spellCheck
          />
        </div>
      </div>
    );
  }
}

export { BaseEditor };
