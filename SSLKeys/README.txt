1) サーバ秘密鍵
# openssl genrsa -des3 -out ServerPrivate.key 2048
パスフレーズはcutt

2) サーバ公開鍵
# openssl genrsa -des3 -out ServerPublic.key 2048
パスフレーズはCUTT

3) 証明書署名要求
# openssl req -new -key ServerPublic.key -out ServerCSR.csr
設定情報は次のとおり
Country Name (2 letter code) [XX]:				JP
State or Province Name (full name) []:				Tokyo
Locality Name (eg, city) [Default City]:			Shinjyuju
Organization Name (eg, company) [Default Company Ltd]:		Cutt System
Organizational Unit Name (eg, section) []:			Publication
Common Name (eg, your name or your server's hostname) []:	www.cutt.co.jp
Email Address []:						foo@cutt.co.jp
A challenge password []:					未指定
An optional company name []:					未指定

4) サーバ証明書
# openssl x509 -req -signkey ServerPrivate.key -in ServerCSR.csr -out ServerCertificate.crt -days 365

5) ファイルリスト
# ls -l
-rwxrwxrwx. 1 root root 1330 Apr 19 10:57 ServerCertificate.crt*
-rwxrwxrwx. 1 root root 1066 Apr 19 10:57 ServerCSR.csr*
-rwxrwxrwx. 1 root root 1751 Apr 19 10:56 ServerPrivate.key*
-rwxrwxrwx. 1 root root 1751 Apr 19 10:56 ServerPublic.key*



