export default function App() {

 const posts = [
  {
    id: 1,
    text: 'herlo, wurld',
    timestamp: 'a minute ago',
    author: {
      username: 'blue_man02'
    },
  },
  {
    id: 2,
    text: 'yah, whatever',
    timestamp: 'an hour ago',
    author: {
      username: 'pink_pink'
    },
  },
  ]
  
  return (
    <>
    <h1>Felix</h1>
    {posts.length > 0 ?
      posts.map(post => {
        return (
          <p key={post.id}>
            <b>{post.author.username}</b> &mdash; {post.timestamp}
            <br />
          {post.text}
        </p>
        );
      })
    :
    <p>there are no posts.</p>
    }
    </>
  );
}