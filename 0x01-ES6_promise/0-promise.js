export default function getResponseFromAPI() {
  const fulfill = true;
  return new Promise((resolve, reject) => {
    if (fulfill) {
      resolve();
    } else {
      reject();
    }
  });
}
