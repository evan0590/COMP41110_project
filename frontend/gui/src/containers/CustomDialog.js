import React from "react";
import { Modal } from "antd";
import CustomForm from "../components/CustomForm";

export default function CustomDialog(props) {
  return (
    <React.Fragment>
      <Modal
        title="Create an event"
        visible={props.dialogOpened}
        onCancel={props.toggleDialog(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <CustomForm requestType="post" btnText="Create" />
      </Modal>
    </React.Fragment>
  );
}
