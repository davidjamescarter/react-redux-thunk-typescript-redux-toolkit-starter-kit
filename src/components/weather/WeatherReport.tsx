import { Fragment } from "react";
import styled from "styled-components";
import { Col, Row } from "react-grid-system";

import { UmbrellaIcon, WindIcon, ThermoIcon } from "components/icons";

import { Forecast } from "features/weather/weatherTypes";

const Status = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .weatherSymbol img {
    width: 50px;
  }

  .iconWrapper {
    display: flex;
    align-items: center;
    font-size: 18px;

    svg {
      width: 20px;
      margin-right: 10px;
    }
  }

  .thermo svg {
    width: 14px;
  }
`;

const WeatherRow = styled(Row)`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  border-top: 1px solid grey;
  padding: 10px 0;

  .place {
    margin-bottom: 5px;
  }
`;

const Precipitation = styled.span`
  color: ${({ theme }) => theme.primaryColor};
`;

const Temp = styled.span<Props>`
  color: ${({ negative, theme }) => (negative ? theme.primaryColor : "red")};
`;

interface Props {
  forecasts?: any;
  negative?: boolean;
}

function WeatherReport({ forecasts }: Props) {
  return (
    <Row style={{ marginTop: "10px" }}>
      {forecasts.map((forecast: Forecast, index: number) => (
        <Fragment key={`forecast.type_${index}`}>
          <Col md={12}>
            <WeatherRow style={{ alignItems: "center" }}>
              {/* <Col md={4}>
                <div className="place">{index === 1 ? "Mine" : "Your's"}</div>
              </Col> */}
              <Col md={8}>
                <Status>
                  <div className="weatherSymbol">
                    <img
                      src={`images/${forecast.properties.timeseries[0].data.next_1_hours.summary.symbol_code}.svg`}
                      alt={
                        forecast.properties.timeseries[0].data.next_1_hours
                          .summary.symbol_code
                      }
                    />
                  </div>
                  <div className="iconWrapper thermo">
                    <ThermoIcon />
                    <Temp
                      negative={
                        Math.sign(
                          forecast.properties.timeseries[0].data.instant.details
                            .air_temperature
                        ) === -1
                      }
                    >
                      {
                        forecast.properties.timeseries[0].data.instant.details
                          .air_temperature
                      }
                      &#176;
                    </Temp>
                  </div>

                  <div className="iconWrapper">
                    <WindIcon />
                    {
                      forecast.properties.timeseries[0].data.instant.details
                        .wind_speed
                    }
                  </div>
                  <div className="iconWrapper">
                    <UmbrellaIcon />
                    <Precipitation>
                      {
                        forecast.properties.timeseries[0].data.next_1_hours
                          .details.precipitation_amount
                      }
                    </Precipitation>
                  </div>
                </Status>
              </Col>
            </WeatherRow>
          </Col>
        </Fragment>
      ))}
    </Row>
  );
}

export default WeatherReport;
