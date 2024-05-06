export const InitialingApplication = async () => {
  const profile = localStorage.getItem("profile");
  const journals = localStorage.getItem("journals");
  const coins = localStorage.getItem("coins");
  const watchList = localStorage.getItem("watchList");
  const holder = localStorage.getItem("holder");
  if (!profile) {
    localStorage.setItem("profile", "{}");
  } else {
    return;
  }
  if (!journals) {
    localStorage.setItem("journals", "[]");
  } else {
    return;
  }
  if (!coins) {
    localStorage.setItem("coins", "[]");
  } else {
    return;
  }
  if (!watchList) {
    localStorage.setItem("watchList", "[]");
  } else {
    return;
  }
  if (!holder) {
    localStorage.setItem("holder", "[]");
  } else {
    return;
  }
};
