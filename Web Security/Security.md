## SECURITY IN API DEVELOPMENT
There are several things to keep on mine while developing a secured API. Some of the most important topics to cover are:
- HTTP vs HTTPS
- CORS
- Server Security (Firewall, IDS, etc..)
- Security best practices

In this section we will cover all of the most important security topics while developing a secure API

### SECURITY BEST PRACTICES
There a lot of good practices while developing a secure API so we will separate them into separated sections: (for a complete lsit of the best practices https://roadmap.sh/best-practices/api-security)

##### AUTHORIZATION:
- Avoid using standard authorization, use JWT or some standard
- Use a rate limiting or jail mechanism to protect from brute force/ DDoS attacks -> Example in /Rate limiting
- Encrypt all the sensitive information

##### ACCESS CONTROL:
- Use HTTPS and secure Ciphers. Ciphers are used by the HTTPS to encrypt the data in transist, using strong ciphers like AES, ChaCha20 or ECDHE make difficult to atackers to intercept and read the encrypted data
- Implement HSTS (HTTP Strict Transport Security), this is a header that tells the browser to only use HTTPS requests. This prevents a MITM (Man in The Middle) attack -> Example of HSTS configuration in /Rate Limiting

##### CSP - CONTENT SECURITY POLICY
The CSP policy is important to avoid your application to suffer a XSS or Clickjacking attack. This policy can be configure in the Content-Security-Policy header, for example if I set this header to default-src 'self' will tell the web to only receive content from site own's origin. We can also configure each media type we want to receive, for example img-src is for image script-src is for internal scripting. A useful tool to configure Headers in Express is Helmet that automatically configures the headers to the recommended values but you can also change to you needs. (https://www.npmjs.com/package/helmet)

