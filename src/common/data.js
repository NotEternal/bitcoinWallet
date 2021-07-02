export function saveUserData(params) {
  const { name, data } = params;

  window.localStorage.setItem(name, data);
}
