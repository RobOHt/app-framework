<template>
    <div id="lecture-1">
  
      <!-- Breadcrumb -->
      <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
          <li class="flex items-center text-blue-500">
            <router-link to="/dashboard" class="text-gray-700">Course</router-link>
            <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
            </svg>
          </li>
          <li class="flex items-center">
            <router-link to="/dashboard/lecture-1" class="text-gray-600">Lecture 1: Introduction to the Course</router-link>
          </li>
        </ol>
      </nav>
      <!-- Breadcrumb end -->
  
      <!-- Lecture Title -->
      <div class="lg:flex justify-between items-center mb-6">
        <p class="text-2xl font-semibold mb-2 lg:mb-0">Lecture 1: Introduction to Elementary Number Theory</p>
      </div>
  
      <!-- Lecture Content -->
      <div class="w-full xl:w-2/3 px-3 -mx-3 mb-10">
        <div class="w-full bg-white border text-blue-400 rounded-lg p-6">
            <div class="mb-10">
                <h2 class="text-xl font-semibold mb-4">Getting Started</h2>
                <p class="text-gray-700">
                Elementary Number Theory is a branch of mathematics that explores the properties of whole numbers. 
                Unlike other areas of math that rely on calculus or advanced algebra, number theory is built upon 
                fundamental arithmetic and logic.  
                </p>
            </div>
        
            <div class="mb-10">
                <h2 class="text-xl font-semibold mb-4">What to Expect in This Course</h2>
                <p class="text-gray-700">
                Over the next few lectures, we will explore patterns in numbers, their divisibility properties, 
                and how simple operations lead to profound mathematical truths. This course is structured as follows:
                </p>
                <ul class="list-disc list-inside text-gray-700 mt-2">
                <li>Introduction to prime numbers and their importance.</li>
                <li>Understanding divisibility and how numbers relate.</li>
                <li>The magic of modular arithmetic and how it applies to real-world problems.</li>
                <li>Exploring famous theorems like Fermat’s Little Theorem.</li>
                <li>Introduction to cryptographic applications.</li>
                </ul>
            </div>
        
            <div class="mb-10">
                <h2 class="text-xl font-semibold mb-4">Why Study Number Theory?</h2>
                <p class="text-gray-700">
                While number theory might seem abstract, it is the backbone of many modern technologies, 
                including cryptography, data security, and computer science algorithms. 
                Many of the mathematical techniques we will study have direct applications in areas 
                such as internet security and digital communication.
                </p>
            </div>
        
            <div class="mb-10">
                <h2 class="text-xl font-semibold mb-4">How This Course is Structured</h2>
                <p class="text-gray-700">
                The course is divided into sections, each covering a fundamental aspect of number theory. 
                Each lecture introduces a key concept, provides examples, and explains its significance.  
                Quizzes will be available at the end of major sections to reinforce understanding.
                </p>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Lecture1'
  }
  </script>
  