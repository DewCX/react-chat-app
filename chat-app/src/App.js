import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="e845894b-0477-48dc-b42c-97348b511827"
      userName="Cem Mandracı"
      userSecret="1234"
      renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}


export default App;

