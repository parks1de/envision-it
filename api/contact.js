export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { fornavn, etternavn, epost, melding, rolle } = req.body;
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'nettside@envision-it.no',
      to:   'hei@envision-it.no',
      subject: `Ny henvendelse fra ${fornavn} ${etternavn} (${rolle})`,
      html: `<p><b>Fra:</b> ${fornavn} ${etternavn}<br>
             <b>E-post:</b> ${epost}<br>
             <b>Rolle:</b> ${rolle}</p>
             <p>${melding}</p>`
    })
  });
  res.status(200).json({ok:true});
}
