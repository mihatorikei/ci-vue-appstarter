<template>
    <nav class="py-4 border-b border-primary-500">
        <div class="container">
            <div class="flex">
                <ul class="flex gap-3 w-max">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                </ul>
                <ul class="flex gap-3 w-max ml-auto">
                    <li><a href="https://github.com/firtadokei/ci-vue-appstarter"><i class="bi bi-github text-2xl"></i></a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
