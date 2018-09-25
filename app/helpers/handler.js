const { json, send } = require('micro')

const filterObjectByArray = (obj, arr) => {
  return arr.reduce((acc, value) => {
    const item = obj[value]
    if (item) {
      acc[value] = typeof item !== 'string' ? item : item.trim()
    }
    return acc
  }, {})
}

module.exports = (promise, params = [], queries = []) => async (req, res) => {
  const query = req.query
  const body = req.headers['content-type'] !== 'application/json' ? {} : await json(req)

  const boundParams = filterObjectByArray(body, params)
  const boundQueries = filterObjectByArray(query, queries)
  try {
    const result = await promise({ ...boundParams, ...boundQueries })
    return send(res, 200, { success: true, data: result })
  } catch (err) {
    return send(res, 500, { success: false, error: err.message || err })
  }
}
