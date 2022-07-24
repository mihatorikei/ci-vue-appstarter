<template>
    <main>
        <section class="grid justify-center gap-3 text-center my-5">

            <div class="flex gap-5 justify-center items-center text-4xl my-5">
                <Transition name="slide-left" appear>
                    <img src="@/assets/logos/vue.png" class="lg:w-24 w-20 duration-300" alt="Vite logo" />
                </Transition>
                +
                <Transition name="slide-top" appear>
                    <img src="@/assets/logos/ci.png" class="lg:w-24 w-20 duration-300 delay-100" alt="CodeIgniter logo" />
                </Transition>
                =
                <Transition name="slide-right" appear>
                    <img src="@/assets/logos/ci-vue.webp" class="lg:w-24 w-20 duration-300 delay-200" alt="Codeigniter vite logo" />
                </Transition>
            </div>

            <Transition name="slide-left" appear>
                <h1 class="text-4xl font-bold duration-500 delay-500">Welcome To CodeIgniter Vite App Starter</h1>
            </Transition>

            <Transition name="slide-right" appear>
                <h3 class="text-lg duration-500 delay-500">Take your project to the next level with VueJs and CodeIgniter4</h3>
            </Transition>

        </section>
        <hr class="border-slate-700 my-3">
        <Transition name="slide-bottom" appear>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 my-5 duration-300 delay-800 text-center">
                <section>
                    <h3 class="text-lg font-bold mb-3">About This Page</h3>
                    <p class="my-3">This page may serve you as a homepage, feel free to edit or remove it</p>
                    <ul class="children:(py-1)">
                        <li>
                            <strong>Controller: </strong> <em>app/Controllers/Home.php</em>
                        </li>
                        <li>
                            <strong>View file: </strong> <em>app/Views/index.php</em>
                        </li>
                        <li>
                            <strong>Vue Page: </strong> <em>resources/pages/index.vue</em>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 class="text-lg font-bold mb-3">Go Further</h3>
                    <p class="my-3">Here are some useful links</p>
                    <ul class="children:(text-sky-500 py-1 font-semibold)">
                        <li><a href="https://github.com/firtadokei/codeigniter-vitejs" target="_blank"><i class="bi bi-link-45deg"></i> CodeIgniter Vite Repository</a></li>
                        <li><a href="https://codeigniter.com/user_guide" target="_blank"><i class="bi bi-link-45deg"></i> CodeIgniter Official User Guide</a></li>
                        <li><a href="https://vuejs.org/" target="_blank"><i class="bi bi-link-45deg"></i> VueJs Documentation</a></li>
                    </ul>
                </section>
            </div>
        </Transition>
    </main>
</template> 
