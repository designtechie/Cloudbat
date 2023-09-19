import blogs from '../components/BlogsData'

const BlogsSection = () => {
  return (
<section className="bg-gray-100 py-16 ">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white p-6 shadow-lg rounded">
          <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover mb-4 rounded-t" />
          <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
          <p className="text-gray-700">{blog.excerpt}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default BlogsSection;
