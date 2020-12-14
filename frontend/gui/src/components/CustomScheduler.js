import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import ShareIcon from "@material-ui/icons/Share";
import MoreIcon from "@material-ui/icons/MoreVert";
import moment from "moment";

const today = moment(new Date()).format("YYYY-MM-DD");

export default function CustomScheduler(props) {
  const Header = ({ appointmentData }) => (
    <AppointmentTooltip.Header
      appointmentData={appointmentData}
      style={{ paddingTop: "20px", paddingRight: "15px" }}
    >
      <ShareIcon /* eslint-disable-next-line no-alert */
        style={{ cursor: "pointer" }}
        onClick={() => alert(JSON.stringify(appointmentData))}
      >
        <MoreIcon />
      </ShareIcon>
      <ul>
        <li>
          <a href={`/events/${appointmentData.id}`}>
            {"Update or delete event..."}
          </a>
        </li>
      </ul>
    </AppointmentTooltip.Header>
  );

  // Tracking the current date in state for DateNavigator
  const [currentDate, setCurrentDate] = React.useState(today);

  const currentDateChange = (currentDate) => {
    setCurrentDate(currentDate);
  };

  const appointmentModel = props.data.map((appointment) => ({
    id: appointment.id,
    startDate: moment.unix(appointment.start_date).format("YYYY-MM-DDTHH:mm"),
    endDate: moment.unix(appointment.end_date).format("YYYY-MM-DDTHH:mm"),
    title: appointment.title,
  }));

  return (
    <Paper>
      <Scheduler data={appointmentModel}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={currentDateChange}
        />
        <EditingState />
        <IntegratedEditing />
        <WeekView startDayHour={9} endDayHour={21} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <AppointmentTooltip headerComponent={Header} showCloseButton />
      </Scheduler>
    </Paper>
  );
}
