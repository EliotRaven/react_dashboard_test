import React from 'react'

class Forms extends React.Component {
  render() {
    return (
      <div className='forms'>
        <div className='row pb-5'>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='card'>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Email address</label>
                    <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'
                           placeholder='Enter email' />
                    <small id='emailHelp' className='form-text text-muted'>
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>Password</label>
                    <input type='password' className='form-control' id='exampleInputPassword1' placeholder='Password' />
                  </div>
                  <div className='form-check'>
                    <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                    <label className='form-check-label' htmlFor='exampleCheck1'>Check me out</label>
                  </div>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='card'>
              <div className='card-body'>
                <form>
                  <div className='form-row'>
                    <div className='form-group col-md-6'>
                      <label htmlFor='inputEmail4'>Email</label>
                      <input type='email' className='form-control' id='inputEmail4' placeholder='Email'/>
                    </div>
                    <div className='form-group col-md-6'>
                      <label htmlFor='inputPassword4'>Password</label>
                      <input type='password' className='form-control' id='inputPassword4' placeholder='Password'/>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='inputAddress'>Address</label>
                    <input type='text' className='form-control' id='inputAddress' placeholder='1234 Main St'/>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='inputAddress2'>Address 2</label>
                    <input type='text' className='form-control' id='inputAddress2'
                           placeholder='Apartment, studio, or floor'/>
                  </div>
                  <div className='form-row'>
                    <div className='form-group col-md-6'>
                      <label htmlFor='inputCity'>City</label>
                      <input type='text' className='form-control' id='inputCity'/>
                    </div>
                    <div className='form-group col-md-4'>
                      <label htmlFor='inputState'>State</label>
                      <select id='inputState' className='form-control'>
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className='form-group col-md-2'>
                      <label htmlFor='inputZip'>Zip</label>
                      <input type='text' className='form-control' id='inputZip'/>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' id='gridCheck' />
                        <label className='form-check-label' htmlFor='gridCheck'>
                          Check me out
                        </label>
                    </div>
                  </div>
                  <button type='submit' className='btn btn-primary'>Sign in</button>
                </form>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='card'>
              <div className='card-body'>
                <form>
                  <div className='form-group row'>
                    <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>Email</label>
                    <div className='col-sm-10'>
                      <input type='email' className='form-control' id='inputEmail3' placeholder='Email' />
                    </div>
                  </div>
                  <div className='form-group row'>
                    <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>Password</label>
                    <div className='col-sm-10'>
                      <input type='password' className='form-control' id='inputPassword3' placeholder='Password' />
                    </div>
                  </div>
                  <fieldset className='form-group'>
                    <div className='row'>
                      <legend className='col-form-label col-sm-2 pt-0'>Radios</legend>
                      <div className='col-sm-10'>
                        <div className='form-check'>
                          <input className='form-check-input' type='radio' name='gridRadios' id='gridRadios1'
                                 value='option1' checked />
                            <label className='form-check-label' htmlFor='gridRadios1'>
                              First radio
                            </label>
                        </div>
                        <div className='form-check'>
                          <input className='form-check-input' type='radio' name='gridRadios' id='gridRadios2'
                                 value='option2' />
                            <label className='form-check-label' htmlFor='gridRadios2'>
                              Second radio
                            </label>
                        </div>
                        <div className='form-check disabled'>
                          <input className='form-check-input' type='radio' name='gridRadios' id='gridRadios3'
                                 value='option3' disabled />
                            <label className='form-check-label' htmlFor='gridRadios3'>
                              Third disabled radio
                            </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div className='form-group row'>
                    <div className='col-sm-2'>Checkbox</div>
                    <div className='col-sm-10'>
                      <div className='form-check'>
                        <input className='form-check-input' type='checkbox' id='gridCheck1' />
                          <label className='form-check-label' htmlFor='gridCheck1'>
                            Example checkbox
                          </label>
                      </div>
                    </div>
                  </div>
                  <div className='form-group row'>
                    <div className='col-sm-10'>
                      <button type='submit' className='btn btn-primary'>Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {Forms}
