<template>
    <div id="dashboard">
        <!-- Navbar -->
        <Navbar />

        <!-- Page Title & Subtitle -->
        <div class="container mx-auto px-6 mt-12 text-center">
            <h1 class="text-4xl font-bold text-gray-800">Select a Course</h1>
            <p class="mt-4 text-lg text-gray-600">
                Choose a course to continue your learning journey.
            </p>
        </div>

        <!-- Course Cards -->
        <div class="container mx-auto px-6 mt-10 mb-20">
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                <!-- Elementary Number Theory (Implemented) -->
                <router-link to="/course/home"
                    class="group block border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                    <div class="h-48">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/3-adic_integers_with_dual_colorings.svg"
                            alt="Elementary Number Theory" class="w-full h-full object-cover" />
                    </div>
                    <div class="p-6">
                        <h2
                            class="text-2xl font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-300 mb-2">
                            Elementary Number Theory
                        </h2>
                        <p class="text-gray-600">
                            An introduction to number properties, prime numbers, and modular arithmetic.
                        </p>
                    </div>
                </router-link>

                <!-- Placeholder Courses -->
                <div
                    class="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white opacity-70 cursor-not-allowed">
                    <div class="h-48 bg-gray-300"></div>
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-500 mb-2">Science</h2>
                        <p class="text-gray-600">Coming soon...</p>
                    </div>
                </div>

                <div
                    class="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white opacity-70 cursor-not-allowed">
                    <div class="h-48 bg-gray-300"></div>
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-500 mb-2">Geometry Fundamentals</h2>
                        <p class="text-gray-600">Coming soon...</p>
                    </div>
                </div>

                <div
                    class="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white opacity-70 cursor-not-allowed">
                    <div class="h-48 bg-gray-300"></div>
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-500 mb-2">Probability & Statistics</h2>
                        <p class="text-gray-600">Coming soon...</p>
                    </div>
                </div>

                <div
                    class="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white opacity-70 cursor-not-allowed">
                    <div class="h-48 bg-gray-300"></div>
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-500 mb-2">Linear Algebra</h2>
                        <p class="text-gray-600">Coming soon...</p>
                    </div>
                </div>

            </div>
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  
  export default {
    name: 'Dashboard',
    components: {
      Navbar,
      Footer
    }
  }
  </script>
  