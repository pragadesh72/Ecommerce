const priceCheckboxValues = [
  {
    value: "checkbox1",
    label: "1-500",
    range: {
      min: 1,
      max: 500,
    },
  },
  {
    value: "checkbox2",
    label: "501-1000",
    range: {
      min: 501,
      max: 1000,
    },
  },
  {
    value: "checkbox3",
    label: "Above 1000",
    range: {
      min: 1001,
      max: 999999,
    },
  },
];
const ratingCheckboxValues = [
  {
    value: "Rcheckbox1",
    label: "4.0-4.2",
    range: {
      min: 4.0,
      max: 4.29,
    },
  },
  {
    value: "Rcheckbox2",
    label: "4.3-4.5",
    range: {
      min: 4.3,
      max: 4.59,
    },
  },
  {
    value: "Rcheckbox3",
    label: "4.6-4.8",
    range: {
      min: 4.6,
      max: 4.8,
    },
  },
  {
    value: "Rcheckbox4",
    label: "4.9-5.1",
    range: {
      min: 4.82,
      max: 5.1,
    },
  },
];

export { priceCheckboxValues, ratingCheckboxValues };
