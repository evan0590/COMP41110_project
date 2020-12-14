import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card, Collapse } from "antd";
import moment from "moment";

import CustomForm from "../components/CustomForm";

const { Panel } = Collapse;

class EventDetail extends React.Component {
  state = {
    event: {},
  };

  UNSAFE_componentWillReceiveProps(newProps) {
    console.log(newProps);
    if (newProps.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: newProps.token,
      };
      const eventID = this.props.match.params.eventID;
      axios.get(`/api/${eventID}/`).then((res) => {
        // axios.get(`http://127.0.0.1:8000/api/${eventID}/`).then((res) => {
        // axios
        //   .get(`ec2-52-49-238-63.eu-west-1.compute.amazonaws.com/api/${eventID}/`)
        //   .then((res) => {
        this.setState({
          event: res.data,
        });
        console.log(res);
      });
    }
  }

  handleDelete = (event) => {
    if (this.props.token !== null) {
      const eventID = this.props.match.params.eventID;
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: this.props.token,
      };
      // axios.delete(`/api/${eventID}/`);
      // axios.delete(`http://127.0.0.1:8000/api/${eventID}/`);
      axios.delete(
        `ec2-52-49-238-63.eu-west-1.compute.amazonaws.com/api/${eventID}/`
      );
      this.props.history.push("/");
      this.forceUpdate();
    } else {
      // show some message or other
    }
  };

  render() {
    return (
      <div>
        <Card title={this.state.event.title}>
          <p>{this.state.event.location}</p>
          <p>
            {moment
              .unix(this.state.event.start_date)
              .format("DD-MM-YYYY HH:mm")}
          </p>
          <p>
            {moment.unix(this.state.event.end_date).format("DD-MM-YYYY HH:mm")}
          </p>
        </Card>
        <Collapse>
          <Panel header="Update or delete event..." key="1">
            <CustomForm
              requestType="put"
              eventID={this.props.match.params.eventID}
              btnText="Update"
            />
            <form onSubmitCapture={this.handleDelete}>
              <Button type="danger" htmlType="submit">
                Delete
              </Button>
            </form>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(EventDetail);
