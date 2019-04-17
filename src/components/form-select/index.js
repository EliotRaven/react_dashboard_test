import React from 'react';
import Select from 'react-select';

class FormSelect extends React.Component {
  onChange = (e) => {
    this.props.onChange({target: {name: this.props.name, value: e.value}});
  }

  cOption = () => {
    return this.props.options.find(r => r.value === this.props.option);
  }

  render() {
    return (
      <div className="form-select form-group">
        <label htmlFor={this.props.id}>
          {this.props.label}{this.props.required && <i className="text-danger required">*</i>}
        </label>
        {this.props.options.length &&
        <Select name={this.props.name}
                id={this.props.id}
                className="basic-single"
                classNamePrefix="select"
                defaultValue={this.props.option && this.cOption()}
                onChange={ this.onChange }
                options={this.props.options.length ? this.props.options : []} />
        }

        {this.props.error && <div className="text-danger m-2" role="alert">{this.props.error}</div>}
      </div>
    );
  }
}

export { FormSelect };
