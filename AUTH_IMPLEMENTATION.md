# React Sneakers - Login/Register Implementation

## O'zgarishlar

### 1. Login va Register Logic
- `components/views/auth/Authview.vue` da to'liq login/register logiki qo'shildi
- Form validation qo'shildi 
- Loading states qo'shildi
- Xato xabarlarni ko'rsatish qo'shildi

### 2. Email Verification Modal
- `components/views/auth/AuthVerification.vue` yaratildi
- OTP kodi kiritish uchun modal
- Qayta kod yuborish funksiyasi
- Email tasdiqlash logikasi

### 3. API Configuration  
- `nuxt.config.ts` da runtime config qo'shildi
- Base URL: `https://muhammadsodiq.das-uty.uz`

### 4. Auth Cookie Management
- Login muvaffaqiyatli bo'lganda token cookie ga saqlanadi
- Dashboard sahifasiga yo'naltirish

## Qanday ishlaydi

### Login
1. Username va parolni kiriting
2. "Sign in" tugmasini bosing
3. API ga request yuboriladi
4. Muvaffaqiyatli bo'lsa token saqlanadi va dashboard ga yo'naltiriladi

### Register  
1. "Sign up" ga o'ting
2. Username, email va parolni kiriting
3. "Sign up" tugmasini bosing
4. Email verification modal ochiladi
5. Emailga kelgan 6 raqamli kodni kiriting
6. Tasdiqlash tugmasini bosing

### Error Handling
- Form validation: barcha maydonlar to'ldirilganini tekshiradi
- API xatolari uchun alert ko'rsatiladi
- Loading states tugmalar uchun qo'shilgan

## Foydalanilgan API Endpoints
- `POST /api/v1/auth/login` - login uchun
- `POST /api/v1/auth/register` - register uchun  
- `POST /api/v1/auth/verify-email` - email tasdiqlash uchun
- `POST /api/v1/auth/resend-otp` - kodni qayta yuborish uchun

## Response Format
Login/Register response:
```json
{
  "accessToken": "string"
}
```

## Environment Variables
```
API_BASE_URL=https://muhammadsodiq.das-uty.uz
```

Agar boshqa base URL ishlatmoqchi bo'lsangiz, `.env` faylida o'zgartiring.
