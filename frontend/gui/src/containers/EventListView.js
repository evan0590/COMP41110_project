import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import CustomScheduler from "../components/CustomScheduler";

class EventList extends React.Component {
  state = {
    events: [],
  };

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: newProps.token,
      };
      axios.get("http://127.0.0.1:8000/api/").then((res) => {
        const userSpecificEvents = [];
        for (var i = 0; i < res.data.length; i++) {
          if (String(this.props.token) === res.data[i].user_token) {
            userSpecificEvents.push(res.data[i]);
          }
        }
        this.setState({
          events: userSpecificEvents,
        });
      });
    }
  }

  render() {
    return (
      <div>
        <CustomScheduler data={this.state.events}></CustomScheduler>
        <br />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(EventList);
