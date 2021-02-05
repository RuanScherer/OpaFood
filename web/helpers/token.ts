interface IAuthenticationTokenData {
  _id: string
  name: string
}

const getAuthenticationTokenData = (): IAuthenticationTokenData => {
  const token = localStorage.getItem("authenticationToken")
  if (token) {
    let data = token.split(".")[1]
    return JSON.parse(atob(data))
  }
  return { _id: null, name: null }
}

export { getAuthenticationTokenData }