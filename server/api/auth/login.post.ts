export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.username === "admin" && body.password === "password") {
    return {
      token: "secret-token-123",
      user: {
        id: 1,
        username: "admin",
        name: "Administrator",
      },
    };
  }

  throw createError({
    statusCode: 401,
    statusMessage: "Username yoki parol xato",
  });
});
