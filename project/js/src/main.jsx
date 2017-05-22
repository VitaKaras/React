import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Header from './sections/Header.jsx';
import HomeSection from './sections/HomeSection.jsx';
import ServiceSection from './sections/ServiceSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import WorkSection from './sections/WorkSection.jsx';
import TeamSection from './sections/TeamSection.jsx';
import NewsSection from './sections/NewsSection.jsx';
import FeedbackSection from './sections/FeedbackSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import Footer from './sections/Footer.jsx';

import NewsView from './sections/NewsView.jsx';

import { ServiceWeb, ServiceGraphic, ServiceSupport, ServiceApp, ServiceMarketing, ServiceSeo } from './components/ServiceItems.jsx';

import aboutReducer from './reducers/aboutReducer';
import portfolioReducer from './reducers/portfolioReducer';
import contactFormReducer from './reducers/contactFormReducer';
import feedbackReducer from './reducers/feedbackReducer';
import newsReducer from './reducers/newsReducer';

const reducers = combineReducers({
    about: aboutReducer,
    portfolio: portfolioReducer,
    contactForm: contactFormReducer,
    feedback: feedbackReducer,
    news: newsReducer
});

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <HomeSection />
                <ServiceSection>
                    {this.props.children}
                </ServiceSection>
                <AboutSection />
                <WorkSection />
                <TeamSection />
                <NewsSection />
                <FeedbackSection />
                <ContactSection />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route component={App}>
                <Route path="/" component={Home} >
                    <IndexRoute component={ServiceWeb} />
                    <Route path="/service/web" component={ServiceWeb} />
                    <Route path="/service/graphic" component={ServiceGraphic} />
                    <Route path="/service/support" component={ServiceSupport} />
                    <Route path="/service/app" component={ServiceApp} />
                    <Route path="/service/marketing" component={ServiceMarketing} />
                    <Route path="/service/seo" component={ServiceSeo} />
                </Route>
                <Route path="/:id" component={NewsView} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
