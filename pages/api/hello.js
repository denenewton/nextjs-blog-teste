export default function handler(req, res) {
    const hostname = process.env.HOSTNAME
    res.status(200).json({ text: 'Hello', user:'Daniel dos Santos Araujo', hostname });
  }