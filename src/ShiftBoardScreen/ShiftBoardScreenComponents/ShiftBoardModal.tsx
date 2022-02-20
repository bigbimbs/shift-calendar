import { FC } from "react";
import closeIcon from "../../assets/images/closeIcon.png";
import locationIcon from "../../assets/images/location-icon.png";
import moneyIcon from "../../assets/images/money-icon.png";

interface ShiftBoardModalInterface {
  modalView: boolean;
  closeModal: () => void;
  modalData: string;
}

const ShiftBoardModal: FC<ShiftBoardModalInterface> = (
  props: ShiftBoardModalInterface
) => {
  const { modalView, closeModal, modalData } = props;
  let newDate = new Date(parseInt(modalData));
  console.log(newDate);
  return (
    <div style={modalView ? { display: "block" } : { display: "none" }}>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        id="nurse-shift-board-screen-modal-background"
      >
        <div
          className="col-sm-5 justify-content-center bg-white p-4"
          id="nurse-shift-board-screen-modal"
        >
          <button
            id="nurse-shift-board-screen-modal-button"
            onClick={closeModal}
          >
            <img src={closeIcon} alt="close-icon" />
          </button>
          <div className="container-fluid">
            <div className="container">
              {/* <p>{modalData.toString() === null ? "" : modalData.toString()}</p> */}
              <div className="d-flex">
                <div>
                  <h6
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#215EAA",
                    }}
                  >
                    {modalData.toString() === null ? "" : modalData.toString()}
                  </h6>
                  <p style={{ fontSize: "16px", fontWeight: "400" }}>Tuesday</p>
                </div>
                <div className="ms-4">
                  <h6
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Afternoon Shift
                  </h6>
                  <p style={{ fontSize: "16px", fontWeight: "400" }}>
                    4 Shifts Available
                  </p>
                </div>
              </div>
            </div>

            <div
              className="container pt-3"
              style={{ borderTop: "1px solid #F2F2F2" }}
            >
              <div className="d-flex">
                <h6>Premier Nursing Home</h6>
                <div className="col align-self-end">
                  <p
                    className="text-end"
                    style={{ color: "#27AE60", fontWeight: "600" }}
                  >
                    4 Nurses needed
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <img
                  src={locationIcon}
                  alt="location icon"
                  style={{ width: "10px", height: "15.99px" }}
                  className="mt-1"
                />
                <p className="ms-2">
                  2464 Royal Ln. Mesamaikieepilat, New Jersey 45463
                </p>
              </div>
              <div className="d-flex">
                <img
                  src={moneyIcon}
                  alt="moeny icon"
                  style={{ width: "16.67px", height: "16.67px" }}
                  className="mt-1"
                />
                <p
                  className="ms-2"
                  style={{ color: "#508DCC", fontWeight: "600" }}
                >
                  $4/ hour
                </p>
                <p className="ms-4">(2/4 Nurses applied)</p>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  className="btn"
                  type="button"
                  style={{
                    background: "#508DCC",
                    borderRadius: "4px",
                    color: "#fff",
                    padding: "4px 8px",
                    width: "76px",
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className="btn"
                type="button"
                style={{ color: "#508DCC" }}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiftBoardModal;
