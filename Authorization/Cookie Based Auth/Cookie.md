## COOKIE AUTHORIZATION
Cookie authorization is not like Basic authentication or JWT authorization or Session Management is more like a authentication flow. So you can have an app that uses cookies and JWT to authenticate users, the only problem with this is that cookies are only accessible by the browser so if you have to make a multiple-device API I would not recommend you to use cookies.
In the attach example I will show you how can JWT and Cookie authentication work together

## CONCLUSION
- If you are 100% that your API will only work with the browser then I think that the cookie will be the most secure and fast way to authenticate users.
- If you want more security you can also sign the cookies with a secret key so the cookies will be signed only for that secret

#### PRINCIPAL RECOMENDATIONS
- Look very good at the options in the res.cookie method. If you have any trouble setting the cookie in the headers probably is because that configuration.
- You can check in the cookie in being set in the browser in you open the developer tools and look for the cookies storage
- Remeber to add the credentials: 'include' in the client request
- And Remeber to properly configure the cors origin and set credentials to true
- I recommed a lot using cookies with JWT credentials and in my point of view this is the most easy and simple way to authenticate your user is a secure way.
