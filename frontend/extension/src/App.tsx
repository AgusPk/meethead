import React from 'react';
import './App.css';
import { DOMMessage, DOMMessageResponse } from './types';
import { Header } from '@meethead/ui';

function App() {
  const [profile, setProfile] = React.useState<DOMMessageResponse | null>(null);
  const [responseMessage, setMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    chrome.tabs &&
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs) => {
          /**
           * Sends a single message to the content script(s) in the specified tab,
           * with an optional callback to run when a response is sent back.
           *
           * The runtime.onMessage event is fired in each content script running
           * in the specified tab for the current extension.
           */
          chrome.tabs.sendMessage(
            tabs[0].id || 0,
            { type: 'GET_DOM' } as DOMMessage,
            (response: DOMMessageResponse) => {
              setProfile(response);
            },
          );
        },
      );
  }, []);

  const sendItToDB = async () => {
    try {
      await fetch('https://l9yvww60t0.execute-api.us-east-1.amazonaws.com/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });
      setMessage('Profile sent to DB successfull!');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return profile ? (
    <div className="App">
      <h1>Linkedin profile exporter</h1>
      <ul className="SEOForm">
        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Name</span>
          </div>
          <div className="SEOVAlidationFieldValue">{profile.name}</div>
        </li>

        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Company</span>
          </div>
          <div className="SEOVAlidationFieldValue">{profile.company}</div>
        </li>
        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Profile Picture</span>
          </div>
          <img src={profile.profilePicture ?? undefined} alt="profile" />
        </li>
      </ul>
      <button onClick={sendItToDB}>Save it!</button>
      {responseMessage && <div>{responseMessage}</div>}
    </div>
  ) : (
    <>
      <Header />
      <h1>You are not in a linkedin Profile</h1>
    </>
  );
}

export default App;
