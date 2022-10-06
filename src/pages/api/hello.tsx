// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as React from 'react'

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
