import * as React from "react";
import "./style.css";

import WhyUs1 from "../../common/images/whyUsDecision-making_2620308.png";
import WhyUs2 from "../../common/images/whyUsMaintenance_769198.png";
import WhyUs3 from "../../common/images/whyUsSolar-panels_4114997.png";
import WhyUs4 from "../../common/images/whyUsThumbs-up_6043309.png";
import WhyUs5 from "../../common/images/whyUsTracking_13386211.png";
import WhyUs6 from "../../common/images/whyUsWarranty_950264.png";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
// }));

export default function CustomizedDialogs() {
  const [show, setShow] = React.useState(false);

  const handleClickOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {/* <div className="help mx-auto max-w-screen-4xl p-0 lg:pl-6 sticky right-0 z-50"> */}
      {/* <div
          className="relative mx-auto flex items-center justify-between text-blue-gray-900"
          style={{ flexDirection: "column" }}
        > */}

      <Button
        variant="outlined"
        className="btn btn-success col-2 justify-content-center information-dialog-button"
        color="success"
        onClick={handleClickOpen}
      >
        Know More
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <div
          className="bootStrappedDialog"
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
        >
          <div className="bootStrappedDialog-Child">
            {/* <DialogTitle variant='h6'  sx={{ m: 0, p: 2 }} className="information-dialog-title" id="customized-dialog-title">
        WHAT ARE BENEFITS OF BUYING FROM SOLAR SHOP SOLUTIONS? */}
            <Modal.Header closeButton>
              <Modal.Title>
                <div
                  className="information-dialog-title"
                  id="customized-dialog-title"
                >
                  WHAT ARE BENEFITS OF BUYING FROM SOLAR SHOP SOLUTIONS?
                </div>
              </Modal.Title>
              {/* <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.error,
                }}
              ></IconButton> */}
            </Modal.Header>
            {/* </Modal.Header> */}
            {/* <DialogContent dividers> */}
            <Modal.Body>
              <div className="list-container">
                <ul>
                  <li>
                    <div className="whyUsIcon">
                      <img src={WhyUs1} alt="" />
                    </div>
                    <div className="whyUsTextContainer">
                      <h3>
                        <strong>Experts Advice</strong>
                      </h3>
                      <p>
                        Unbiased advice from experts for all Solar Products and
                        Equipments.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="whyUsIcon">
                      <img src={WhyUs3} alt="" />
                    </div>
                    <div className="whyUsTextContainer">
                      <h3>
                        <strong>Installation Service</strong>
                      </h3>
                      <p>Installation Service available Pan India.</p>
                    </div>
                  </li>

                  <li>
                    <div className="whyUsIcon">
                      <img src={WhyUs4} alt="" />
                    </div>
                    <div className="whyUsTextContainer">
                      <h3>
                        <strong>Best Offers and Verfied Contractors</strong>
                      </h3>
                      <p>
                        Get the best offers for your project from several
                        verified EPC contractors from your region.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="whyUsIcon">
                      <img src={WhyUs6} alt="" />
                    </div>
                    <div className="whyUsTextContainer">
                      <h3>
                        <strong>Warranty Claim</strong>
                      </h3>
                      <p>
                        Claim your warranty directly from solar shop solutions
                        without going to individual brand.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="whyUsIcon">
                      <img src={WhyUs2} alt="" />
                    </div>
                    <div className="whyUsTextContainer">
                      <h3>
                        <strong>Maintenance Warranty</strong>
                      </h3>
                      <p>
                        Get the additional maintenance warranty for 5 years from
                        solar shop solutions.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="whyUsIcon">
                      <img src={WhyUs5} alt="" />
                    </div>
                    <div className="whyUsTextContainer">
                      <h3>
                        <strong>Keep Track Of Energy</strong>
                      </h3>
                      <p>
                        You can keep a track of your energy anywhere from the
                        globe.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Modal.Body>
          </div>
        </div>
        {/* </div> */}
      </Modal>
    </>
  );
}
