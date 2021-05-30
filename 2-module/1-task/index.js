function sumSalary(salaries) {
  let John = salaries["John"];
  let Ann = salaries["Ann"];
  let Pete = salaries["Pete"];

  if (isNaN(John) == false || isNaN(Ann) == false || isNaN(Pete) == false) {
    return salaries.John + salaries.Ann + salaries.Pete;
  } else {
    return 0;
  }
}
