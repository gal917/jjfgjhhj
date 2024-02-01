import { getDBUrl } from "./ConfigManager"

const login = async (username, password) => {
  const data = {
    username: username,
    password: password
  }
  try {
    const response = await fetch(getDBUrl() + "/login", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data)
    });

    if(!response.ok){
      throw new Error("Error performing login post request!")
    }

    return await response.json();
  } catch(error) {
    console.log(error)
  }
}

export {login}