import imagekit from "@/utils/imageKit";

export async function GET() {
  try {
    const authParams = imagekit.getAuthenticationParameters();
    return new Response(JSON.stringify(authParams), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
