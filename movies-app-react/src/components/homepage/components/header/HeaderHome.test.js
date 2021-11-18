import renderer from 'react-test-renderer';
window.React = require('react')
import App from '../../../../App';
import HomeHeader from './HeaderHome';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router } from "react-router-dom";

fdescribe("HomeHeader Component Testing", () => {
  test("snapshot testing" , () => {
    const homHeader = renderer
    .create(
      <App>
        <Router>
          <HomeHeader></HomeHeader>
          <Footer></Footer>
        </Router>      
      </App>
   ).toJSON();
  expect(homHeader).toMatchSnapshot()
  });
})