function showSalary(users, age) {
  let userAge = users.filter((user) => {
    return user.age <= age;
  });

  let result = userAge.map((user21) => {
    return `${user21.name}, ${user21.balance}`;
  });
  return result.join("\n");
}
