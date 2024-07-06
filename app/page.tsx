import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My
      </h1>
      <p className="mb-4">
        I am a bioengineering graduate student at UC San Diego. 
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
