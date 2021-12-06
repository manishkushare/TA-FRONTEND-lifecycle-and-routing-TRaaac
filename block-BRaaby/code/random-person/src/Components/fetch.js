function fetch() {
  const data = fetch("https://randomuser.me/api/")
  data = data.then(res => res.json()).then(data => data)
  return data;
}

export { fetch };