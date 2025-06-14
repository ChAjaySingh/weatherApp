import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Icon from "@mui/material/Icon";
import AirIcon from "@mui/icons-material/Air";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";
import TireRepairTwoToneIcon from "@mui/icons-material/TireRepairTwoTone";
import WaterDropTwoToneIcon from "@mui/icons-material/WaterDropTwoTone";
import { useEffect, useState } from "react";


export default function InfoBox({ info }) {
  const weatherURl = {
    rain: "https://cdn-icons-png.flaticon.com/512/2470/2470014.png",
    clear: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp",
    Thunderstorm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLTelwAl_Duz4kMtNTP9zwOtJ_iAZwHm7mQ&s",
    drizzle: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzS7K3N4qhFd5oDmIXZOe9NSPA6yHmYt9qMA&s",
    snow: "   https://cdn-icons-png.flaticon.com/512/2315/2315377.png",
    atmosphere: "https://png.pngtree.com/element_our/20190601/ourmid/pngtree-heavy-fog-icon-image_1366084.jpg",
    clouds: "https://cdn-icons-png.flaticon.com/512/5903/5903939.png",
  }

  const[imgURL, stImgURL] = useState(null);
  useEffect(() => {
    if (info && info.weather) {
      const key = Object.keys(weatherURl).find(key =>
        info.weather.toLowerCase().includes(key)
      );
      if (key) {
        // console.log(weatherURl[key]);
        stImgURL(weatherURl[key]);
      }
    }
  }, [info]);

  return (
    <div className="InfoBox">
      <div>
        <section className="mt-4">
          <MDBContainer className="h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol>
                <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <MDBTypography tag="h4" className="flex-grow-1">
                          {info.name}
                        </MDBTypography>
                      </div>
                      <div>
                        <MDBTypography tag="h6">feels like</MDBTypography>
                        <MDBTypography tag="h6">{info.feelsLike}</MDBTypography>
                      </div>
                    </div>

                    <div className="d-flex flex-column text-center mt-5 mb-4">
                      <MDBTypography
                        tag="h6"
                        className="display-4 mb-0 font-weight-bold"
                        style={{ color: "#1C2331" }}
                      >
                        {`${info.temp}°C`}
                      </MDBTypography>
                      <span className="small" style={{ color: "#868B94" }}>
                        {info.weather}
                      </span>
                    </div>

                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                        <div className="d-flex align-items-center">
                          <span>
                            <Icon fontSize="small"
                              style={{
                                height: "1.8rem",
                                width: "1.4rem"
                              }}
                            >
                              <AirIcon />
                            </Icon>
                          </span>
                          <span className="ms-1">
                            {Math.round((info.windSpeed* 3.6)* 10)/ 10} Km/h
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>
                            <Icon fontSize="small" style={{ height: "1.8rem" }}>
                              <WaterDropTwoToneIcon />
                            </Icon>
                          </span>
                          <span className="ms-1"> {`${info.humidity}%`} </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>
                            <Icon
                              fontSize="small"
                              style={{ height: "1.8rem", width: "1.5rem" }}
                            >
                              <TireRepairTwoToneIcon />
                            </Icon>
                          </span>
                          <span className="ms-1">{`${info.pressure}hPa`}</span>
                        </div>
                      </div>
                      <div className="ms-2">
                        <img
                          src={imgURL}
                          // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                          width="100px"
                        />
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </div>
  );
}
