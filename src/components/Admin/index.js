import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import {
  UserDetailButtonContainer,
  AdminContainer,
  UserDetailTable,
  UserDetailButtons,
  AdminTable,
  UserDetailButtonCancel,
} from "../../theme/StyledCom";
class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on("value", (snapshot) => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { loading } = this.state;

    return (
      <AdminContainer>
        <h1>Admin</h1>
        <p>The Admin Page is accessible by every signed in admin user.</p>

        {loading && <div>Loading ...</div>}

        <Switch>
          <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
          <Route exact path={ROUTES.ADMIN} component={UserList} />
        </Switch>
      </AdminContainer>
    );
  }
}

class UserListBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().on("value", (snapshot) => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }
  componentWillUnmount() {
    this.props.firebase.users().off();
  }
  render() {
    const { users, loading } = this.state;

    return (
      <>
        <AdminTable>
          <caption>Users</caption>
          {loading && <div>Loading ...</div>}
          <thead>
            <tr>
              <th>Username:</th>
              <th>E-Mail:</th>
              <th>ID:</th>
              <th>Info</th>
            </tr>
          </thead>
          {users.map((user) => (
            <>
              <tbody>
                <tr key={user.uid}>
                  <td data-label="Username:">{user.username}</td>
                  <td data-label="E-Mail:">{user.email}</td>
                  <td data-label="ID:">{user.uid}</td>
                  <td data-label="Info:">
                    <Link
                      to={{
                        pathname: `${ROUTES.ADMIN}/${user.uid}`,
                        state: { user },
                      }}
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </AdminTable>
      </>
    );
  }
}

class UserItemBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: null,
      ...props.location.state,
    };
  }

  componentDidMount() {
    if (this.state.user) {
      return;
    }
    this.setState({ loading: true });
    this.props.firebase
      .user(this.props.match.params.id)
      .on("value", (snapshot) => {
        this.setState({
          user: snapshot.val(),
          loading: false,
        });
      });
  }
  componentWillUnmount() {
    this.props.firebase.user(this.props.match.params.id).off();
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.doPasswordReset(this.state.user.email);
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {};

  updateLeague = (leagueID) => {
    this.props.firebase.user(this.state.user.uid).update({
      league: leagueID,
    });
  };

  render() {
    const { user, loading } = this.state;
    return (
      <div>
        {loading && <div>Loading ...</div>}
        {user && (
          <UserDetailTable>
            <caption>User ({this.props.match.params.id})</caption>
            <thead>
              <tr>
                <th>Username:</th>
                <th>E-Mail:</th>
                <th>ID:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Username:">{user.username}</td>
                <td data-label="E-Mail:">{user.email}</td>
                <td data-label="ID:">{user.uid}</td>
              </tr>
            </tbody>
          </UserDetailTable>
        )}
        <UserDetailButtonContainer>
          <span>
            <UserDetailButtons
              type="button"
              onClick={() => this.updateLeague(2021)}
            >
              Change To PL
            </UserDetailButtons>
          </span>
          <span>
            <UserDetailButtons
              type="button"
              onClick={() => this.updateLeague(2001)}
            >
              Change To CL
            </UserDetailButtons>
          </span>
          <span>
            <UserDetailButtons
              type="button"
              onClick={this.onSendPasswordResetEmail}
            >
              Send Password Reset
            </UserDetailButtons>
          </span>
          <span>
            <UserDetailButtonCancel to={ROUTES.ADMIN}>
              Go Back
            </UserDetailButtonCancel>
          </span>
        </UserDetailButtonContainer>
      </div>
    );
  }
}
const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

const UserList = withFirebase(UserListBase);
const UserItem = withFirebase(UserItemBase);

export default withFirebase(withAuthorization(condition)(AdminPage));
