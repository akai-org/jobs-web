const EmployeesAmount = [
  {
    value: "0",
    label: "< 50"
  },
  {
    value: "1",
    label: "50 - 99"
  },
  {
    value: "2",
    label: "100 - 200"
  },
  {
    value: "3",
    label: "> 200"
  }
];

const getEmployeesAmountByValue = value =>
  EmployeesAmount.find(e => e.value === value).label || null;

export { EmployeesAmount as default, getEmployeesAmountByValue };
