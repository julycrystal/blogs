export default async function handler(req, res) {
  try {
    return res.status(200).json({ total: 0 })
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
