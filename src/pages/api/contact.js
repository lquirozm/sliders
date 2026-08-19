
export const prerender = false;

const API_CONTACT_URL = import.meta.env.API_URL;

export async function POST({ request }) {
  try {
    const data = await request.json();

    const response = await fetch(API_CONTACT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: result.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
