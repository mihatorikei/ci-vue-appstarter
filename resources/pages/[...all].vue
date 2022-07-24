<template>
    <main class="text-center">
        <div class="flex flex-col gap-y-5 justify-center items-center h-screen">
            <h1 class="text-7xl font-bold">404, Not Found</h1>
            <h1 class="text-lg font-bold">Hi there, are you lost?</h1>
            <RouterLink to="/" class="py-2 px-2 bg-primary-500 w-max mx-auto rounded">Take me home</RouterLink>
            <p>This file lives in <code class="bg-dark-500 bg-opacity-50 p-2 rounded">resources/pages/[..all].vue</code> it may serve you as a 404 error page.</p>
        </div>
    </main>
</template>