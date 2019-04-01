import React from 'react'
import {FormGroup} from "../form-group";
import {FormSelect} from "../form-select";

const iData = {
  message: null
}

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: this.props.data ? this.props.data : iData,
      formErrors: iData,
    };
  }

  formValidation(){
    return Object.keys(iData).reduce(
      (isValid, keyName) => isValid && keyName in this.state.form && !!this.state.form[keyName], true
    )
  }

  onChange = (val) => {
    this.setState({
      form: {
        ...this.state.form,
        [val.target.name]: val.target.value
      }
    })
  }

  findAndShowError = () => {
    let formErrors = {}
    Object.keys(this.state.formErrors).forEach(k => {
      formErrors[k] = this.state.form[k] ? null : 'Field is required'
    });
    this.setState({formErrors})
  }

  submit = (e) => {
    e.preventDefault()
    this.formValidation() ? this.props.onSubmit(this.state.form) : this.findAndShowError()
  }

  cOptions = (props) => {
    return props.map(i => {
      return {value: i.id, label: i.title || `${i.name} ${i.surname}`}
    })
  }

  render() {
    let comment = this.props.data ? this.props.data : {}
    let {articles, users} = this.props

    return(
      <form onSubmit={this.submit}>

        <FormSelect required={true}
                    name='author_id'
                    id='author_id'
                    label='Author'
                    options={this.cOptions(users)}
                    option={comment.author_id ? comment.author_id : null}
                    error={this.state.formErrors.author_id}
                    onChange={this.onChange} />

        <FormSelect required={true}
                    name='article_id'
                    id='article_id'
                    label='Article'
                    options={this.cOptions(articles)}
                    option={comment.article_id ? comment.article_id : null}
                    error={this.state.formErrors.article_id}
                    onChange={this.onChange} />

        <FormGroup required={true}
                   name='message'
                   id='message'
                   type='text'
                   label='Message'
                   value={comment.message ? comment.message : null}
                   onChange={this.onChange} />

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-outline-dark btn-lg d-flex justify-content-between align-items-center">
            <span>{this.props.btnText}</span> {this.props.loading && <i className="material-icons pl-2 custom-spin">autorenew</i>}
          </button>
        </div>
      </form>
    )
  }
}

export {CommentForm}