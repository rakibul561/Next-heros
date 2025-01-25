export async function DELETE(request: any, { params }: any) {
  // Find the comment to delete by ID
  const commentId = parseInt(params.id);

  // Filter out the comment with the given ID
  const NewComments = comments.filter((c) => c.id !== commentId);

  // If the comment was not found
  if (NewComments.length === comments.length) {
    return Response.json({
      message: 'Comment not found',
    });
  }

  // Return a success response with updated comments
  return Response.json({
    message: 'Comment deleted successfully',
    comments: NewComments,
  });
}

const comments = [
  {
    id: 1,
    text: 'Comment 1',
  },
  {
    id: 2,
    text: 'Comment 2',
  },
  {
    id: 3,
    text: 'Comment 3',
  },
];
