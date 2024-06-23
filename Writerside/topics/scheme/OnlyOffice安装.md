# 安装onlyoffice

```
sudo docker run -i -t -d -p 9898:80 --restart=always \ 
	-v /usr/local/data/onlyoffice/logs:/var/log/onlyoffice \ 
	-v /usr/local/data/onlyoffice/data:/var/www/onlyoffice/Data \ 
	-v /usr/local/data/onlyoffice/lib:/var/lib/onlyoffice \ 
	-v /usr/local/data/onlyoffice/db:/var/lib/postgresql 
	-e JWT_SECRET=my_jwt_secret 
	-e JWT_ENABLED=false onlyoffice/documentserver\ 
```

## 其中内网需要修改通过ip访问，

```
docker cp ./default.json interesting_villani:/etc/onlyoffice/documentserver/default.json 
docker cp interesting_villani:/etc/onlyoffice/documentserver/default.json 
``` 