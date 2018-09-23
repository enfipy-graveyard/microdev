const { json, send } = require('micro')

module.exports = (promise, params) => async (req, res) => {
  const body = await json(req)
  const boundParams = params.map((param) => body[param])
  try {
    const result = await promise(...boundParams)
    return send(res, 200, { success: true, data: result })
  } catch (error) {
    return send(res, 500, { success: false, error: error.message })
  }
}
