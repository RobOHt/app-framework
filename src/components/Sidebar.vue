<template>
  <div class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30"
    :class="sideBarOpen ? '' : 'hidden'" id="main-nav">

    <!-- Sidebar Header -->
    <div class="w-full h-20 border-b flex px-4 items-center mb-8">
      <router-link to="/dashboard"><p class="font-semibold text-3xl text-blue-400 pl-4">APP</p></router-link>
    </div>

    <!-- COURSE INFORMATION Section -->
    <div class="mb-4 px-4">
      <p class="pl-4 text-sm font-semibold mb-1">COURSE INFORMATION</p>
      <router-link to="/course/home" exact
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
        active-class="bg-gray-300">
        <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
          <path
            d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88">
          </path>
        </svg>
        <span class="text-gray-700">Course Outline</span>
      </router-link>
    </div>

    <!-- COURSE CONTENT Section -->
    <div class="mb-4 px-4">
      <p class="pl-4 text-sm font-semibold mb-1">COURSE CONTENT</p>
      <router-link to="/course/lecture-1"
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
        active-class="bg-gray-300">
        <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
          <path
            d="M17.283,5.549h-5.26V4.335c0-0.222-0.183-0.404-0.404-0.404H8.381c-0.222,0-0.404,0.182-0.404,0.404v1.214h-5.26c-0.223,0-0.405,0.182-0.405,0.405v9.71c0,0.223,0.182,0.405,0.405,0.405h14.566c0.223,0,0.404-0.183,0.404-0.405v-9.71C17.688,5.731,17.506,5.549,17.283,5.549">
          </path>
        </svg>
        <span class="text-gray-700">Lecture 1</span>
      </router-link>
    </div>

    <!-- QUIZZES Section -->
    <div class="mb-4 px-4">
      <p class="pl-4 text-sm font-semibold mb-1">QUIZZES</p>
      <router-link to="/course/quiz-1"
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
        active-class="bg-gray-300">
        <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
          <path
            d="M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467">
          </path>
        </svg>
        <span class="text-gray-700">Quiz 1</span>
      </router-link>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapState(['sideBarOpen'])
  }
}
</script>
