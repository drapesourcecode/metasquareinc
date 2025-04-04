export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = localStorage.getItem('auth_token')
    
    // If no token is found and trying to access protected route
    if (!token && to.path.startsWith('/admin')) {
      return navigateTo('/login')
    }
  }
}) 