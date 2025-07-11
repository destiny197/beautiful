const features = [
  {
    title: 'Server-Side Rendering',
    description: 'Improved SEO and faster initial page loads with built-in SSR capabilities.',
    icon: '🚀'
  },
  {
    title: 'TypeScript Support',
    description: 'Built-in TypeScript support for better development experience and type safety.',
    icon: '📝'
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development and consistent design.',
    icon: '🎨'
  },
  {
    title: 'API Routes',
    description: 'Build full-stack applications with built-in API routes and serverless functions.',
    icon: '⚡'
  },
  {
    title: 'Image Optimization',
    description: 'Automatic image optimization and lazy loading for better performance.',
    icon: '🖼️'
  },
  {
    title: 'File-based Routing',
    description: 'Intuitive routing system based on the file system structure.',
    icon: '🗂️'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build modern web applications with confidence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}