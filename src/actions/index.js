export function setState(name, value){
  return {
    type: `SET_${name}`,
    value: value
  }
}
