import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskDashboard from '../context_components/TaskDashboard';
import TaskDetail from '../src_components/TaskDetail';
import TaskForm from '../src_components/TaskForm';
import Layout from '../context_components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={TaskDashboard} />
          <Route path="/task/:id" component={TaskDetail} />
          <Route path="/new" component={TaskForm} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
