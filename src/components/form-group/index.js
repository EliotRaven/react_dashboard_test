import React from 'react';

class FormGroup extends React.Component {
  onChange = (e) => {
    this.props.onChange(e)
  }

  render() {
    return (
      <div className="form-group position-relative">
        <label htmlFor={this.props.id}>
          {this.props.label}{this.props.required && <i className="text-danger required">*</i>}
          </label>
        <input name={this.props.name}
               type={this.props.type}
               className="form-control"
               id={this.props.id}
               defaultValue={this.props.value}
               onChange={ this.onChange } />
        {this.props.error && <div className="text-danger m-2" role="alert">{this.props.error}</div>}
      </div>
    );
  }
}

export { FormGroup };
