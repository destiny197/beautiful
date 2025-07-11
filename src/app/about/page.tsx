import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About NextApp
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're passionate about building modern web applications that deliver 
              exceptional user experiences and developer productivity.
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To empower developers and businesses with cutting-edge web technologies 
                that make building scalable, performant applications both enjoyable and efficient. 
                We believe in the power of modern frameworks like Next.js to transform 
                how we create digital experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We stay at the forefront of web development trends and technologies, 
                  constantly exploring new ways to improve performance and user experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600">
                  Every line of code we write is crafted with attention to detail, 
                  following best practices and modern development standards.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-gray-600 mb-6">
                Join thousands of developers who trust Next.js for their projects.
              </p>
              <a 
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}