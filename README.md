# server

## Auth Routes

routes|method|Note
------|------|-----------
/register|post| payload yang dibutuhkan : email,password,username,CityId,postal_code,address_line
/verify|patch| payload di headers : (akan dikirimkan ke email register anda)semua line setelah "v="
/login|post|payload yang dibutuhkan : email,password
