export default function handler(req, res) {
    const resp = () => {
        res.status(200).json({ message: 'ok' })
    }
    setTimeout(resp, 5000)
}
  