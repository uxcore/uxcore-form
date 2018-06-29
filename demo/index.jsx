/**
 * Form Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary';
import Demo from './FormDemo';
// import Demo from './FormDemoSize';

ReactDOM.render(
  <ErrorBoundary>
    <Demo />
  </ErrorBoundary>
  , document.getElementById('UXCoreDemo'));
