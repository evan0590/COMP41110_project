import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import moment from "moment";
import { Form, Input, Button, DatePicker } from "antd";

const { RangePicker } = DatePicker;

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf("day");
}

class CustomForm extends React.Component {
  state = {
    start_date: 0,
    end_date: 0,
  };

  handleOnChange = (date, dateString) => {
    this.setState({ start_date: date[0].unix(), end_date: date[1].unix() });
    console.log(date);
  };

  handleFormSubmit = (event, requestType, eventID) => {
    const title = event.target.elements.title.value;
    const start_date = this.state.start_date;
    const end_date = this.state.end_date;
    const location = event.target.elements.location.value;

    console.log(this.state.end_date);

    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: this.props.token,
    };

    switch (requestType) {
      case "post":
        return (
          axios
            // .post("http://127.0.0.1:8000/api/", {
            .post("/api/", {
              title: title,
              start_date: start_date,
              end_date: end_date,
              location: location,
              user_token: this.props.token,
            })
            .then((res) => console.log(res))
            .catch((error) => console.error(error))
        );
      case "put":
        return (
          axios
            // .put(`http://127.0.0.1:8000/api/${eventID}/`, {
            .put(`/api/${eventID}/`, {
              title: title,
              start_date: start_date,
              end_date: end_date,
              location: location,
              user_token: this.props.token,
            })
            .then((res) => console.log(res))
            .catch((error) => console.error(error))
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={(event) =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.eventID
            )
          }
        >
          <Form.Item label="Title">
            <Input
              name="title"
              placeholder="Put a title here"
              console={console.log(this.props)}
            />
          </Form.Item>
          <Form.Item label="Start Date">
            <RangePicker
              name="date"
              onChange={this.handleOnChange}
              disabledDate={disabledDate}
              showTime={{
                hideDisabledOptions: true,
                defaultValue: [
                  moment("00:00:00", "HH:mm:ss"),
                  moment("00:00:00", "HH:mm:ss"),
                ],
              }}
              format="DD-MM-YYYY HH:mm"
            />
          </Form.Item>
          <Form.Item label="Location">
            <Input name="location" placeholder="Put a location here" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(CustomForm);
