const getQueryParam = (paramName: string) => {
  if (typeof window !== 'undefined') {
    const queryParams = window.location.search.slice(1).split("&")

    const mappedParams = queryParams.map(param => {
      const parts = param.split("=")
      return {
        name: parts[0],
        value: parts[1]
      }
    })

    let paramValue: string;
    for (const param of mappedParams) {
      if (param.name === paramName) return param.value
    }

    return paramValue
  }

  return ""
}

export { getQueryParam }