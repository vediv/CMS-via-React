import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
// import navigation from './_nav';
// routes config
import routes from './routes';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';



class DefaultLayout extends Component {
  constructor(props){
    super(props);
    this.state={
      direct: false,
      items:[],
      re: false
    };
  }

  componentDidMount() {

      if(localStorage.getItem('email')){
      }
      else {
        this.setState({direct: true});
      }
this.sidebar();
  }
  sidebar () {
    var formdata = new FormData();
    formdata.append("action", "sidebar");
    fetch('http://192.168.24.46/cms/main.php', {
       method: 'POST',
       body:formdata
   }).then((res) => res.json())
   .then((data) =>  {
     this.setState({items:data, re:true});

  }).catch((err) => console.log(err));
  }

  render() {
    if (this.state.direct){
      return <Redirect to="/login" />
    }
    else {
      if (this.state.re)
       {
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={this.state.items} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>

        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
  else {
    return this.sidebar.bind(this);
  }
  }
    }
}

export default DefaultLayout;
