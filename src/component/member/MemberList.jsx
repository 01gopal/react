import React from "react";

const Member = ({ email, picture, name, location }) => (
  <div>
    <img src={picture.thumbnail} alt={name.first} />
    <h1>
      {name.first} {name.last}
    </h1>
    <p>
      <a href={`mailto: ${email}`}>{email}</a>
    </p>
    <p>
      {location.city} {location.state}
    </p>
  </div>
);

export const getFakeMembers = count =>
  new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () => {
      request.status === 200
        ? resolves(JSON.parse(request.response).results)
        : rejects(Error(request.statuText));
    };
    request.onerror = err => rejects(err);
    request.send();
  });

class MemberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      loading: false,
      error: null
    };
  }

  static defaultProps = {
    count: 0
  };

  componentWillMount() {
    this.setState({ loading: true });
    getFakeMembers(this.props.count)
      .then(members =>
        this.setState({
          members,
          loading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          loading: false
        })
      );
  }

  componentWillUpdate() {
    console.log(`Some update to the component!`);
  }

  render() {
    const { members, loading, error } = this.state;
    return (
      <div>
        {loading ? (
          <span>Loading members.....</span>
        ) : members.length !== 0 ? (
          members.map((member, i) => <Member key={i} {...member} />)
        ) : (
          <span>o members loaded</span>
        )}
        {error ? <p>Loading error : {error} </p> : ""}
      </div>
    );
  }
}

export default MemberList;
