<template>
  <div id="home">

    <!-- Breadcrumb -->
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500">
          <a href="#" class="text-gray-700">Course</a>
          <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </li>
        <li class="flex items-center">
          <a href="#" class="text-gray-600">Course Information</a>
        </li>
      </ol>
    </nav>
    <!-- Breadcrumb end -->

    <!-- Course Greeting -->
    <div class="lg:flex justify-between items-center mb-6">
      <p class="text-2xl font-semibold mb-2 lg:mb-0">Welcome to Elementary Number Theory</p>
    </div>

    <!-- Course Summary Stats -->
    <div class="w-full flex flex-wrap -mx-3 mb-10">
      <div class="w-1/2 xl:w-1/3 px-3">
        <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
          <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
            <path
              d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219" />
          </svg>
          <div class="text-gray-700">
            <p class="font-semibold text-3xl">10</p>
            <p>Total Lectures</p>
          </div>
        </div>
      </div>

      <div class="w-1/2 xl:w-1/3 px-3">
        <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
          <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
            <path
              d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21" />
          </svg>
          <div class="text-gray-700">
            <p class="font-semibold text-3xl">5</p>
            <p>Quizzes Available</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Course Description -->
    <div class="w-full xl:w-2/3 px-3 -mx-3 mb-10">
      <div class="w-full bg-white border text-blue-400 rounded-lg p-6">
        <div class="mb-10">
          <h2 class="text-xl font-semibold mb-4">About This Course</h2>
          <p class="text-gray-700">
            Elementary Number Theory is the study of properties of integers and their relationships.
            It is one of the oldest branches of mathematics and has applications in cryptography, coding theory, and
            computer security.
            This course introduces fundamental concepts such as divisibility, prime numbers, modular arithmetic, and
            Diophantine equations.
          </p>
        </div>

        <!-- Topics Covered -->
        <div class="mb-10">
          <h2 class="text-xl font-semibold mb-4">What You Will Learn</h2>
          <ul class="list-disc list-inside text-gray-700">
            <li>Prime Numbers and Factorization</li>
            <li>Greatest Common Divisors and the Euclidean Algorithm</li>
            <li>Congruences and Modular Arithmetic</li>
            <li>Fermat’s and Euler’s Theorems</li>
            <li>Linear and Quadratic Diophantine Equations</li>
            <li>Introduction to Cryptographic Applications</li>
          </ul>
        </div>

        <!-- Course Objectives -->
        <div class="mb-10">
          <h2 class="text-xl font-semibold mb-4">Course Objectives</h2>
          <p class="text-gray-700">
            By the end of this course, you should be able to:
          </p>
          <ul class="list-disc list-inside text-gray-700">
            <li>Understand and apply the concepts of divisibility and prime numbers.</li>
            <li>Solve problems involving modular arithmetic and congruences.</li>
            <li>Work with number theoretic functions and understand their properties.</li>
            <li>Apply number theory in real-world applications such as cryptography.</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DashboardHome'
}
</script>
