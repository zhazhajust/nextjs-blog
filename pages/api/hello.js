// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
    res.setPreviewData({})
    res.end('Preview mode enabled')
  }