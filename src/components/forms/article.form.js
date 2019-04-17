import React from 'react';
import { FormGroup } from '../form-group';
import { BaseEditor } from '../text-editor';

const iData = {
    title: null,
    description: null,
    content: null,
};

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: props.article ? props.article : iData,
      formErrors: iData,
      content: {},
      contentValidation: !!this.props.article,
    };
  }

  editorValidation = valid => {
    this.setState({contentValidation: valid});
  }

  formValidation(){
    return !!(this.state.form.content
				    && this.state.form.title
				    && this.state.form.description
				    && this.state.contentValidation);
  }

  onChange = (val) => {
    this.setState({
      form: {
        ...this.state.form,
        [val.target.name]: val.target.value,
      }
    });
  }

  findAndShowError() {
    this.setState({
      formErrors: {
        title: (this.state.form.title) ? null : 'Title field is required',
        description: (this.state.form.description) ? null : 'Description field is required',
        content: (this.state.form.content && this.contentValidation) ? null : 'Content field is required',
      }
    });
  }

  submit = (e) => {
    e.preventDefault();
    this.formValidation() ? this.props.onSubmit({...this.state.form}) : this.findAndShowError()
  }

  render() {
    const article  = this.state.form;
    return(
      <form onSubmit={this.submit}>

        <FormGroup name="image"
                   id="image"
                   type="text"
                   label="Image"
                   value={article.image ? article.image : null}
                   onChange={this.onChange} />

        <FormGroup required
                   name="title"
                   id="title"
                   type="text"
                   label="Title"
                   value={article.title}
                   onChange={this.onChange}
                   error={this.state.formErrors.title} />

        <FormGroup required
                   name="description"
                   id="description"
                   type="text"
                   value={article.description}
                   label="Description"
                   onChange={this.onChange}
                   error={this.state.formErrors.description}
        />

        <FormGroup name="source"
                   id="source"
                   type="text"
                   label="Source Link"
                   value={article.source ? article.source : null}
                   onChange={this.onChange} />


        <div className="form-group position-relative">
          <label>Content<i className="text-danger required">*</i></label>
          <BaseEditor required
                      value={article.content}
                      onContentChange={this.onChange}
                      name="content"
                      validation={this.editorValidation}
          />
          {this.state.formErrors.content &&
            <div className="text-danger m-2" role="alert">{this.state.formErrors.content}</div>
          }
        </div>


        <div className="d-flex justify-content-end">
          <button type="submit"
                  className="btn btn-outline-dark btn-lg d-flex justify-content-between align-items-center">
            <span>{this.props.btnText}</span>
	          {this.props.loading && <i className="material-icons pl-2 custom-spin">autorenew</i>}
          </button>
        </div>
      </form>
    );
  }
}

export { ArticleForm };
