export async function GET () {
    return Response.json( {
         comments
    })
} 


export async function POST (request: { json: () => any }) {
    const newComments = await request.json() 
    comments.push({
        id: comments.length + 1 ,
        text: newComments.text 
    })

    return Response.json( {

        message : 'newComment Added ',
         comments
    })
} 


 
  const comments = [
    {
        id: 1 ,
        text: 'Comment 1'
    },
    {
        id: 2 ,
        text: 'Comment 2'
    },
    {
        id: 3,
        text: 'Comment 3'
    },
  ]