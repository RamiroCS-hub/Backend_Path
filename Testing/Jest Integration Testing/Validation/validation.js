export const validateBody = (body) => { 
  if(body == undefined || body == null || Object.entries(body).length <= 0) return false
  return true
}