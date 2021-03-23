export interface Forecast {
  properties: {
    meta: {
      units: {
        [index: string]: string;
      };
      updated_at: string;
    };
    timeseries: [
      {
        data: {
          next_6_hours: {
            details: {
              [index: string]: number;
            };
            summary: {
              symbol_code: string;
            };
          };
          instant: {
            details: {
              [index: string]: number;
            };
          };
          next_12_hours: {
            summary: {
              symbol_code: string;
            };
            details: {
              [index: string]: number;
            };
          };
          next_1_hours: {
            details: {
              [index: string]: number;
            };
            summary: {
              symbol_code: string;
            };
          };
        };
        time: string;
      }
    ];
  };
  geometry: {
    type: string;
    coordinates: Array<number>;
  };
  type: string;
}
