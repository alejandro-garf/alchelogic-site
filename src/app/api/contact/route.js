export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Server-side validation
    if (!name || name.length < 2 || name.length > 100) {
      return Response.json(
        { error: 'Invalid name' },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: 'Invalid email' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        to_email: 'info@alchelogic.com',
        from_name: 'Alchelogic Website',
        name,
        email,
        company: company || '',
        message: message || '',
        subject: `New contact from ${name} - Alchelogic`,
        replyto: email,
      }),
    });

    if (response.ok) {
      return Response.json({ success: true });
    } else {
      return Response.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }
  } catch (error) {
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
