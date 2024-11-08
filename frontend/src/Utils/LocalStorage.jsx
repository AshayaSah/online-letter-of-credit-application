const users = [
  {
    id: 1,
    username: "aashish",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(users));
};
export const getLocalStorage = () => {
  const data = localStorage.getItem("users");
  console.log(JSON.parse(data));
};
