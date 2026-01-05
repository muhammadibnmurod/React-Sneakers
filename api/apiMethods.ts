// Автосгенерированный клиент API
// Сгенерировано из https://muhammadsodiq.das-uty.uz/api/v1/docs-json

import type { paths } from './apiMethods.types';
export const apiMethods = (options?: any) => {
  return {
    Auth: {
      login: (body: paths['/api/v1/auth/login']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/auth/login']['post']['responses']['default']['content']['application/json']>(`/api/v1/auth/login`, { method: 'POST', body: body, ...options }),
      register: (body: paths['/api/v1/auth/register']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/auth/register']['post']['responses']['default']['content']['application/json']>(`/api/v1/auth/register`, { method: 'POST', body: body, ...options }),
      verifyEmail: (body: paths['/api/v1/auth/verify-email']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/auth/verify-email']['post']['responses']['default']>(`/api/v1/auth/verify-email`, { method: 'POST', body: body, ...options }),
      resendOtp: (body: paths['/api/v1/auth/resend-otp']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/auth/resend-otp']['post']['responses']['default']>(`/api/v1/auth/resend-otp`, { method: 'POST', body: body, ...options }),
    },
    users: {
      getAllUsers: () => useApi<paths['/api/v1/users']['get']['responses']['default']['content']['application/json']>('/api/v1/users', { method: 'GET', ...options }),
      createUser: (body: paths['/api/v1/users']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/users']['post']['responses']['default']>(`/api/v1/users`, { method: 'POST', body: body, ...options }),
      UsersController_findOne: (id: string | number) => useApi<paths['/api/v1/users/{id}']['get']['responses']['200']>(`/api/v1/users/${id}`, { method: 'GET', ...options }),
      UsersController_update: (id: string | number, body: paths['/api/v1/users/{id}']['patch']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/users/{id}']['patch']['responses']['200']>(`/api/v1/users/${id}`, { method: 'PATCH', body: body, ...options }),
      UsersController_remove: (id: string | number) => useApi<void>(`/api/v1/users/${id}`, { method: 'DELETE', ...options }),
    },
    categories: {
      getAllCategories: () => useApi<paths['/api/v1/categories']['get']['responses']['200']>('/api/v1/categories', { method: 'GET', ...options }),
      createCategory: (body: paths['/api/v1/categories']['post']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/categories']['post']['responses']['201']>(`/api/v1/categories`, { method: 'POST', body: body, ...options }),
      CategoriesController_findOne: (id: string | number) => useApi<paths['/api/v1/categories/{id}']['get']['responses']['200']>(`/api/v1/categories/${id}`, { method: 'GET', ...options }),
      CategoriesController_update: (id: string | number, body: paths['/api/v1/categories/{id}']['patch']['requestBody']['content']['application/json']) => useApi<paths['/api/v1/categories/{id}']['patch']['responses']['200']>(`/api/v1/categories/${id}`, { method: 'PATCH', body: body, ...options }),
      deleteCategory: (id: string | number) => useApi<void>(`/api/v1/categories/${id}`, { method: 'DELETE', ...options }),
    },
  };
};
