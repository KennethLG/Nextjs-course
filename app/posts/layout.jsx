import Counter from './Counter'

export default function PostsLayout({ children }) {
  return (
    <div>
      <h1>Posts</h1>
      <Counter />
      {children}
    </div>
  );
}
