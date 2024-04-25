const defaultUserValue = {
  profile_url : "",
  fullname : "",
  realstates : [],
  email : "",
  phone : ""
}

const userContext = React.createContext(defaultUserValue)

export default userContext
