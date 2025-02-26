<template>
    <div id="quiz-1">
  
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
            <router-link to="/dashboard/quiz-1" class="text-gray-600">Quiz 1: Introduction Quiz</router-link>
          </li>
        </ol>
      </nav>
      <!-- Breadcrumb end -->
  
      <!-- Quiz Title -->
      <div class="lg:flex justify-between items-center mb-6">
        <p class="text-2xl font-semibold mb-2 lg:mb-0">Quiz 1: Introduction to Number Theory</p>
      </div>
  
      <!-- Quiz Content Wrapper -->
      <div class="w-full xl:w-2/3 px-3 -mx-3 mb-10">
        <div class="w-full bg-white border text-blue-400 rounded-lg p-6">
  
          <div class="mb-10">
            <h2 class="text-xl font-semibold mb-4">Test Your Understanding</h2>
            <p class="text-gray-700">
              This short quiz will check your understanding of fundamental number theory concepts. Select the best answer for each question.
            </p>
          </div>
  
          <!-- Loop through questions -->
          <div v-for="(question, qIndex) in questions" :key="qIndex" class="mb-10">
            <h3 class="text-lg font-semibold mb-2">{{ qIndex + 1 }}. {{ question.text }}</h3>
            <div class="flex flex-wrap gap-4">
              <button
                v-for="(option, oIndex) in question.options"
                :key="oIndex"
                @click="checkAnswer(qIndex, oIndex)"
                class="bg-gray-100 border px-4 py-2 rounded-lg hover:bg-gray-200 text-gray-700"
              >
                {{ option }}
              </button>
            </div>
            <p v-if="feedback[qIndex]" class="mt-2 font-semibold" :class="feedback[qIndex].correct ? 'text-green-500' : 'text-red-500'">
              {{ feedback[qIndex].message }}
            </p>
          </div>
  
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    name: 'Quiz1',
    data() {
      return {
        feedback: {}, // Holds feedback for each question
        questions: [
          {
            text: "Which number is prime?",
            options: ["12", "17", "20"],
            correct: 1
          },
          {
            text: "What is the greatest common divisor (GCD) of 18 and 24?",
            options: ["2", "6", "12"],
            correct: 1
          },
          {
            text: "What is modular arithmetic primarily used for?",
            options: ["Solving quadratic equations", "Cryptography and security", "Calculating probabilities"],
            correct: 1
          },
          {
            text: "Which of these is an example of a composite number?",
            options: ["11", "13", "15"],
            correct: 2
          },
          {
            text: "What does the term 'divisibility' refer to?",
            options: [
              "A number can be divided by another without leaving a remainder", 
              "A number is prime", 
              "A number is irrational"
            ],
            correct: 0
          },
          {
            text: "Which theorem is a fundamental result in number theory?",
            options: ["Fermat's Last Theorem", "Pythagorean Theorem", "Binomial Theorem"],
            correct: 0
          }
        ]
      };
    },
    methods: {
      checkAnswer(questionIndex, selectedOption) {
        const question = this.questions[questionIndex];
        const messages = {
          correct: "Correct! 🎉",
          wrong: "Incorrect. Try again! ❌"
        };
        // Use Vue.set for reactivity in Vue 2
        this.$set(this.feedback, questionIndex, {
          correct: selectedOption === question.correct,
          message: selectedOption === question.correct ? messages.correct : messages.wrong
        });
      }
    }
  };
  </script>
  