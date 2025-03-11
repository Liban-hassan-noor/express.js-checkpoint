extends layout
 
 block content
   section(class="relative h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('https://cdn.pixabay.com/photo/2020/11/04/06/49/barber-5711575_1280.jpg')")
     div(class="absolute inset-0 bg-black opacity-50")
     div(class="relative z-10 text-center px-4")
       h1(class="text-5xl font-bold mb-6") Premium Grooming Experience
       p(class="text-xl mb-8 text-gray-200") Where style meets excellence
       button(class="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500") Book Now
 
   section(class="py-16 bg-gray-800")
     div(class="container mx-auto px-6")
       h2(class="text-3xl font-bold text-center mb-12") Our Services
       div(class="grid grid-cols-1 md:grid-cols-3 gap-8")
         div(class="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition duration-300")
           div(class="mb-4")
             svg(class="w-12 h-12 text-yellow-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24")
               path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3")
           h3(class="text-xl font-semibold text-center mb-2") Classic Haircut
           p(class="text-gray-400 text-center") Professional cut with attention to detail
           p(class="text-yellow-400 text-center mt-4 font-semibold") From $25
 
         div(class="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition duration-300")
           div(class="mb-4")
             svg(class="w-12 h-12 text-yellow-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24")
               path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3")
           h3(class="text-xl font-semibold text-center mb-2") Beard Trim
           p(class="text-gray-400 text-center") Expert beard shaping and grooming
           p(class="text-yellow-400 text-center mt-4 font-semibold") From $15
 
         div(class="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition duration-300")
           div(class="mb-4")
             svg(class="w-12 h-12 text-yellow-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24")
               path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3")
           h3(class="text-xl font-semibold text-center mb-2") Hot Towel Shave
           p(class="text-gray-400 text-center") Luxury traditional straight razor shave
           p(class="text-yellow-400 text-center mt-4 font-semibold") From $30
 
   section(class="py-16 bg-gray-900")
     div(class="container mx-auto px-6")
       h2(class="text-3xl font-bold text-center mb-12") Why Choose Us
       div(class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center")
         div(class="mb-8")
           div(class="text-yellow-400 text-4xl font-bold mb-2") 10+
           p(class="text-gray-400") Years Experience
         div(class="mb-8")
           div(class="text-yellow-400 text-4xl font-bold mb-2") 5000+
           p(class="text-gray-400") Happy Clients
         div(class="mb-8")
           div(class="text-yellow-400 text-4xl font-bold mb-2") 4
           p(class="text-gray-400") Expert Barbers
         div(class="mb-8")
           div(class="text-yellow-400 text-4xl font-bold mb-2") 100%
           p(class="text-gray-400") Satisfaction
 
   section(class="py-16 bg-gray-800")
     div(class="container mx-auto px-6")
       h2(class="text-3xl font-bold text-center mb-12") What Our Clients Say
       div(class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8")
         // Testimonial 1
         div(class="bg-gray-900 p-6 rounded-lg")
           p(class="text-gray-400 mb-4") "Best haircut I've ever had. The attention to detail is amazing!"
           div(class="flex items-center")
             div(class="w-12 h-12 bg-gray-700 rounded-full mr-4")
             div
               p(class="font-semibold") John Doe
               p(class="text-sm text-gray-400") Regular Client
 
         div(class="bg-gray-900 p-6 rounded-lg")
           p(class="text-gray-400 mb-4") "Professional service with great atmosphere. Highly recommended!"
           div(class="flex items-center")
             div(class="w-12 h-12 bg-gray-700 rounded-full mr-4")
             div
               p(class="font-semibold") Mike Smith
               p(class="text-sm text-gray-400") Regular Client
 
         div(class="bg-gray-900 p-6 rounded-lg")
           p(class="text-gray-400 mb-4") "Love the consistency and quality of service every time I visit."
           div(class="flex items-center")
             div(class="w-12 h-12 bg-gray-700 rounded-full mr-4")
             div
               p(class="font-semibold") David Wilson
               p(class="text-sm text-gray-400") Regular Client
 
   section(class="py-16 bg-gray-900")
     div(class="container mx-auto px-6 text-center")
       h2(class="text-3xl font-bold mb-6") Ready for a Fresh Look?
       p(class="text-xl text-gray-400 mb-8") Book your appointment today and experience the difference
       button(class="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500") Book Appointment
