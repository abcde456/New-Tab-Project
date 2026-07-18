// While this is not actually where the cloudflare worker is deployed from, this is the exact code used in it
export default {
    async fetch(request) {
        const url = new URL(request.url);
        const query = url.searchParams.get("q");

        const response = await fetch(
            `https://duckduckgo.com/ac/?q=${encodeURIComponent(query || "")}`,
        );

        return new Response(await response.text(), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    },
};
