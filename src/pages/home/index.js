import React from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { Main } from '../main'

import { Sidebar } from '../../components/sidebar';
import { Navigation } from '../../components/navigation';
import { Articles, CreateArticle, UpdateArticle } from '../articles';
import { Users, CreateUser, UpdateUser } from '../users';
import { Roles, CreateRole, UpdateRole } from '../roles';
import { Comments, CreateComment, UpdateComment } from '../comments';

class Home extends React.Component {
  state = {
    show: true
  }

  toggle = (val) => {
    this.setState({show: val})
  }

  render () {
    return (
      <div className='home'>
        <div className='wrapper'>
          <Sidebar show={this.state.show} />
          <div id='content'>
            <Navigation show={this.state.show} onShowChange={this.toggle} />
            <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames='fade'
                  timeout={300}
                >
                  <Switch location={location}>
                    <Route exact path='/' component={Main} />

                    <Route exact path='/articles' component={Articles} />
                    <Route path='/articles/create' component={CreateArticle} />
                    <Route path='/articles/update/:id' component={UpdateArticle} />

                    <Route exact path='/users' component={Users} />
                    <Route path='/users/create' component={CreateUser} />
                    <Route path='/users/update/:id' component={UpdateUser} />

                    <Route exact path='/roles' component={Roles} />
                    <Route path='/roles/create' component={CreateRole} />
                    <Route path='/roles/update/:id' component={UpdateRole} />

                    <Route exact path='/comments' component={Comments} />
                    <Route path='/comments/create' component={CreateComment} />
                    <Route path='/comments/update/:id' component={UpdateComment} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {state}
}

const connectionHome = connect(mapStateToProps)(Home);
export {connectionHome as Home}
