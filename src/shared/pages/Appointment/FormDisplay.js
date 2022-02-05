import InputDiv from "./Formelements/InputDiv";
import "./FormDisplay.css";
const FormDisplay = (props) => {
  return (
    <div className="formdisplay">
      <form>
        <div className="formdisplay-container">
          <div className="formdisplay-ham_menu">
            <i
              class="fas fa-bars"
              onClick={() => {
                console.log("clciked");
                props.showNavOnClick(true);
              }}
            ></i>
          </div>
          <div className="appointment__info">
            <div className="appointment__info__header">
              <p>Appointment Information</p>
            </div>
            <div className="appointment__info__inputs">
              <InputDiv label="Appointment Date" required={true} type="date" />
              <InputDiv label="Consultancy Type" required={true} />
              <InputDiv label="Center" required={true} />
              <InputDiv label="Doctors" required={true} />
              <InputDiv label="Appointment mode" />
            </div>
          </div>
          <div className="patient__info">
            <div className="patient__info__header">
              <p>Patient Information</p>
            </div>
            <div className="patient__info__inputs">
              <div className="patient__info__inputs_row">
                <InputDiv label="Patient Name" required={true} />
                <InputDiv label="Mobile number" required={true} type="number" />
                <InputDiv label="Email" required={true} type="email" />
                <InputDiv label="Gender" required={true} />
              </div>
              <div className="patient__info__inputs_row">
                {" "}
                <InputDiv label="Address" required={true} />
                <InputDiv label="Landmark" required={true} />
                <InputDiv label="Pincode" required={true} type="number" />
                <InputDiv label="State" required={true} />
              </div>
              <div className="patient__info__inputs_row">
                <InputDiv label="Country" required={true} />
                <InputDiv label="Type of Package" required={true} />
              </div>
            </div>
          </div>
          <div className="patient__history">
            <div className="patient__history__info__header">
              <p>Patient History</p>
            </div>
            <div className="patient__info__inputs"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormDisplay;
