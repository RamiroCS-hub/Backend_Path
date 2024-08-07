## SECURITY IN API DEVELOPMENT
There are several things to keep on mine while developing a secured API. Some of the most important topics to cover are:
- HTTP vs HTTPS
- CORS
- Server Security (Firewall, IDS, etc..)
- Security best practices

In this section we will cover all of the most important security topics while developing a secure API

### SECURITY BEST PRACTICES
There a lot of good practices while developing a secure API so we will separate them into separated sections:

##### AUTHORIZATION:
- Avoid using standard authorization, use JWT or some standard
- Use a rate limiting or jail mechanism to protect from brute force/ DDoS attacks -> Example in /Rate limiting
- Encrypt all the sensitive information

##### ACCESS CONTROL:
- Use HTTPS and secure Ciphers. Ciphers are used by the HTTPS to encrypt the data in transist, using strong ciphers like AES, ChaCha20 or ECDHE make difficult to atackers to intercept and read the encrypted data
- Implement HSTS (HTTP Strict Transport Security), this is a header that tells the browser to only use HTTPS requests. This prevents a MITM (Man in The Middle) attack -> Example of HSTS configuration in /Rate Limiting