
export async function GET(request) {
    const usuarios = [{ name: 'John Doe' }, { name: 'Jane Doe' }, { name: 'Alice' }, { name: 'Bob' }]
    return Response.json(usuarios)
}