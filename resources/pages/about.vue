<script setup>

import { onMounted, ref } from 'vue'
import axios from 'axios'

const fetchedData = ref({})
const isFetching = ref(true)

async function fetching() {

    isFetching.value = true

    axios.get('info').then((res) => {
        fetchedData.value = res.data
        console.log(res.data)
    }).catch(error => {
        fetchedData.value = "Error, while fetching !"
    }).finally(() => {
        isFetching.value = false
    });
}

onMounted(() => fetching())
</script>

<template>
    <main class="mt-5">
        <div class="text-center">

            <div class="duration-300">
                <h2 class="text-4xl"><i class="bi bi-info-circle-fill"></i></h2>
                <h3 class="text-3xl font-bold mb-5">About page</h3>
            </div>


            <!-- Simple fetching example -->
            <Transition name="scale" appear>
                <div v-if="isFetching" class="my-5">
                    <i class="text-5xl bi bi-fan block spin"></i>
                    <p>Please wait...</p>
                </div>


                <div v-else>
                    <p>This is a simple fetching example using <code class="bg-dark-500 bg-opacity-50 p-1">axios</code></p>
                    <table v-if="typeof fetchedData === 'object'" class="w-max mx-auto my-5 children:(border-b border-slate-600 last:!border-none)">
                        <tr v-for="(item, i) in fetchedData" :key="i">
                            <td class="p-2">{{ item.name }}</td>
                            <td class="p-2">{{ item.version }}</td>
                        </tr>
                        <tr class="border-none">
                            <td colspan="2" class="text-center">
                                <button class="px-3 py-2 bg-primary-500 mt-5 rounded" @click="fetching">Refresh</button>
                            </td>
                        </tr>
                    </table>
                    <p v-else class="my-3 text-red-500 font-bold">
                        {{ fetchedData }}
                    </p>
                </div>
            </Transition>

            <hr class="my-5 border-slate-600" />

            <p>This file lives in <code class="bg-dark-500 bg-opacity-50 p-1">resources/pages/about.vue</code> feel free to edit or remove it</p>

        </div>
    </main>
</template>