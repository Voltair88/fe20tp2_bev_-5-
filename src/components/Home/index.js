import { AuthUserContext, withAuthorization } from "../Session";
import React, { Component } from "react";
import { withFirebase } from "../Firebase";

import Player from "../Player";
import styled from "styled-components";
import { Bar, Line } from 'react-chartjs-2';

import { Background, ChartContainer, Blur, HomeMain, Content } from '../StyledCom';



const HomePage = ({ scorers }) => {
  return (
    <Background>
      <Blur>
        <HomeMain>
          <Content>
            <h1>Home</h1>
            <p>The Home Page is accessible by every signed in user.</p>
            {/* <ScorersList scorers={scorers} /> */}
            <BarChart scorers={scorers} />

            {/* <Messages /> */}
          </Content>
        </HomeMain>
      </Blur>
    </Background>
  );
};

class MessagesBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      loading: false,
      messages: [],
      limit: 5,
    };
  }

  onChangeText = (event) => {
    this.setState({ text: event.target.value });
  };

  onCreateMessage = (event, authUser) => {
    this.props.firebase.messages().push({     /* messages = () => this.db.ref("messages"); Pathum */
      text: this.state.text,
      userId: authUser.uid,
      createdAt: this.props.firebase.serverValue.TIMESTAMP,
    });
    this.setState({ text: "" });
    event.preventDefault();
  };

  onEditMessage = (message, text) => {
    const { uid, ...messageSnapshot } = message;
    this.props.firebase.message(message.uid).set({
      ...messageSnapshot,
      text,
      editedAt: this.props.firebase.serverValue.TIMESTAMP,
    });
  };

  onRemoveMessage = (uid) => {
    this.props.firebase.message(uid).remove();
  };

  onEditMessage = (message, text) => {
    const { uid, ...messageSnapshot } = message;
    this.props.firebase.message(message.uid).set({
      ...messageSnapshot,
      text,
    });
  };

  componentDidMount() {
    this.onListenForMessages();
  }

  onListenForMessages() {
    this.setState({ loading: true });
    this.props.firebase
      .messages()
      .orderByChild("createdAt")
      .limitToLast(this.state.limit)
      .on("value", (snapshot) => {
        const messageObject = snapshot.val();
        if (messageObject) {
          const messageList = Object.keys(messageObject).map((key) => ({
            ...messageObject[key],
            uid: key,
          }));
          // convert messages list from snapshot
          this.setState({
            messages: messageList,
            loading: false,
          });
        } else {
          this.setState({ messages: null, loading: false });
        }
      });
  }

  componentWillUnmount() {
    this.props.firebase.messages().off();
  }

  onNextPage = () => {
    this.setState(
      (state) => ({ limit: state.limit + 5 }),
      this.onListenForMessages
    );
  };

  render() {
    const { text, messages, loading } = this.state;
    return (
      <AuthUserContext.Consumer>
        {(authUser) => (
          <div>
            {loading && <div>Loading ...</div>}
            {!loading && messages && (
              <button type="button" onClick={this.onNextPage}>
                More
              </button>
            )}
            {messages ? (
              <MessageList
                authUser={authUser}
                messages={messages}
                onEditMessage={this.onEditMessage}
                onRemoveMessage={this.onRemoveMessage}
              />
            ) : (
              <div>There are no messages ...</div>
            )}
            <form onSubmit={(event) => this.onCreateMessage(event, authUser)}>
              <input type="text" value={text} onChange={this.onChangeText} />
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const MessageList = ({
  authUser,
  messages,
  onEditMessage,
  onRemoveMessage,
}) => (
  <ul>
    {messages.map((message) => (
      <MessageItem
        key={message.uid}
        message={message}
        authUser={authUser}
        onEditMessage={onEditMessage}
        onRemoveMessage={onRemoveMessage}
      />
    ))}
  </ul>
);

class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      editText: this.props.message.text,
    };
  }

  onToggleEditMode = () => {
    this.setState((state) => ({
      editMode: !state.editMode,
      editText: this.props.message.text,
    }));
  };

  onChangeEditText = (event) => {
    this.setState({ editText: event.target.value });
  };

  onSaveEditText = () => {
    this.props.onEditMessage(this.props.message, this.state.editText);
    this.setState({ editMode: false });
  };

  render() {
    const { authUser, message, onRemoveMessage } = this.props;
    const { editMode, editText } = this.state;
    return (
      <li>
        {editMode ? (
          <input
            type="text"
            value={editText}
            onChange={this.onChangeEditText}
          />
        ) : (
          <span>
            <strong>{message.userId}</strong> {message.text}
            {message.editedAt && <span>(Edited)</span>}
          </span>
        )}
        {authUser.uid === message.userId && (
          <span>
            {editMode ? (
              <span>
                <button onClick={this.onSaveEditText}>Save</button>
                <button onClick={this.onToggleEditMode}>Reset</button>
              </span>
            ) : (
              <button onClick={this.onToggleEditMode}>Edit</button>
            )}
          </span>
        )}
      </li>
    );
  }
}

const Messages = withFirebase(MessagesBase);

const goals = [];
const player = [];

const ScorersList = ({ scorers }) => {
  return (
    <div>


      <ul>
        {scorers.map((item, index) => (
          <li key={index}>
            <Player player={item.player} />
            <span>Number of goals:{item.numberOfGoals}</span>
          </li>
        ))}
      </ul>




    </div>
  );
};


const BarChart = ({ scorers }) => {

  { scorers.map(item => goals.push(item.numberOfGoals)) } {/* Set data to array to display in chart */ }
  { scorers.map(item => player.push(item.player.name)) }
  return (
    <ChartContainer>
      <Bar
        data={{
          labels: player,
          datasets: [
            {
              label: 'Goals',
              data: (goals.length) <= 0 ? '' : goals,

              backgroundColor: [
                "#f38b4a",
                "#56d798",
                "#ff8397",
                "#6970d5",
                "#f38b4a",
                "#56d798",
                "#f38b4a",
                "#56d798",
                "#ff8397",
                "#6970d5",
              ],
            }
          ]
        }}
        height={500}
        width={50}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                }
              }
            ]
          }
        }}

      />
    </ChartContainer>
  )
}



const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
