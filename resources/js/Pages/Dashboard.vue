<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, usePage} from '@inertiajs/vue3';
import axios from 'axios';
import { useToast } from 'vue-toastification';
const toast = useToast();

defineProps(['user']);
const user = usePage().props.auth.user;


function handleClick() {
  axios.post('/broadcast-demo-event', {'user':user.id}).then(response => {
    toast.success('Demo Event Broadcasted!');
  }).catch(error => {
    toast.error('Failed to broadcast Demo Event.');
  }).finally(() => {
    console.log('Request completed');
  });
}
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout :user="user">
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800"
            >
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    class="overflow-hidden bg-white shadow-sm sm:rounded-lg"
                >
                    <div class="p-6 text-gray-900">
                        You're logged in!
                    </div>
                  <button @click="handleClick" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    Broadcast Demo Event
                  </button>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
