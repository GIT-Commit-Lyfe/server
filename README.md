# server

## Auth Routes

routes|method|Note
------|------|-----------
/register|post| payload yang dibutuhkan : email,password,username,CityId,postal_code,address_line
/verify|patch| payload di headers : (akan dikirimkan ke email register anda)semua line setelah "v="
/login|post|payload yang dibutuhkan : email,password
/pin|post|payload yang dibutuhkan : pin (dikirim ke email user),verify_token (didapatkan dari response login)*di headers
